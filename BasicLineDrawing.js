// Getting scene
var scene = document.querySelector("a-scene");
// Getting right controller
var conRight = scene.querySelector("#right");
// Getting right controller
var conLeft = scene.querySelector("#left");
// Getting camera rig
var menuCamRig = scene.querySelector("#rig");
// Getting menu camera
var menuCam = scene.querySelector("#menuCam");
// Getting drawing canvas
var canvas = scene.querySelector("#canvas");
// Getting tip of right brush
var tipR = scene.querySelector("#tipR");
// Getting tip of left brush
var tipL = scene.querySelector("#tipL");

// Fields
const RIGHT = true;
const LEFT = false;
const COLORS = ['red','green','blue','purple','white','black','yellow'] // list of colors
var currColor = 0; // current color

var lineNum = 0; // tracks the number of lines drawn
var strokeNum = -1; // strokeNum starts at -1
var strokeAnchor = 0; // strokeAnchor which indicates where in the undo/redo chain the user is
var currStroke = []; // tracks the lines in a given stroke
var prevCoord; // ending coords of the previous line
var strokes = []; // total list of strokes in the drawing
var interval; // the drawing interval that continously runs

function rescale(el,size){
    obj = el.getObject3D('mesh');
    // Go over the submeshes and modify materials we want.
    obj.traverse(node => {
        // set the scale to be .3 of original model
        if(node.scale != null){
        node.scale.set(size,size,size)
        }
    });
}

function moveRig(x,y){
    let curr = menuCamRig.getAttribute('position')
    menuCamRig.setAttribute('position',{x: curr.x+(.3*x), y: curr.y+(.3*y), z: curr.z})
}

// function to set the current brush hand
function changeBrushHand(hand) {
    leftColor = conLeft.getAttribute('brush').color // get left hand color
    rightColor = conRight.getAttribute('brush').color // get right hand color
    if(hand == RIGHT){ // if the brush is desired on the right hand
        currColor = COLORS.indexOf(rightColor) // updates current color
        conLeft.setAttribute('brush',{active: false, color: leftColor}) // disable left brush
        rescale(conLeft,0); // hide left controller
        tipL.setAttribute('src',"lib/eraser.jpg") // set left tip to be the eraser
        tipL.setAttribute('material',{shader: 'flat', color: 'white'}) // set left tip color to be white
        conRight.setAttribute('brush',{active: true, color: rightColor}) // enable right brush
        rescale(conRight,0.3); // show right controller
        tipR.setAttribute('src',"lib/bristles.jpg") // set right tip to be bristles
        tipR.setAttribute('material',{shader: 'flat', color: conRight.getAttribute('brush').color}) // set right tip color to be brush color
    } else if(hand == LEFT){ // if the brush is desired on the left hand
        currColor = COLORS.indexOf(leftColor) // updates current color
        conLeft.setAttribute('brush',{active: true, color: leftColor}) // enable left brush
        rescale(conLeft,0.3); // show left controller
        tipL.setAttribute('src',"lib/bristles.jpg")
        tipL.setAttribute('material',{shader: 'flat', color: conLeft.getAttribute('brush').color}) // set left tip color to be brush color
        conRight.setAttribute('brush',{active: false, color: rightColor}) // disable right 
        rescale(conRight,0); // hide right controller
        tipR.setAttribute('src',"lib/eraser.jpg") // set right tip to be the eraser
        tipR.setAttribute('material',{shader: 'flat', color: 'white'}) // set right tip color to be white
    }
}

// function to change the drawing color
// only changes it for current hand
function changeColor(hand, direction) {
    if(direction == LEFT){ // if the color change should go back one step
        if(currColor > 0){ // if the color is at the beginning of the list
            currColor -= 1 // move the color back one step
        } else {
            currColor = COLORS.length-1 // set the current color to be end of the list
        }
    } else if(direction == RIGHT){ // if the color change should go forward one step
        if(currColor < COLORS.length-1){ // if the color is at the end of the list
            currColor += 1 // move the color forward one steo
        } else {
            currColor = 0 // set the current color to be beginning of the list
        }
    }
    // set color of active hand and tip of active brush to new color
    hand ? conRight.setAttribute('brush',{active: conRight.getAttribute('brush').active, color: COLORS[currColor]}) : conLeft.setAttribute('brush',{active: conLeft.getAttribute('brush').active, color: COLORS[currColor]})
    hand ? tipR.setAttribute('material',{shader: 'flat',color:COLORS[currColor]}) : tipL.setAttribute('material',{shader: 'flat',color:COLORS[currColor]})
}

// function to start a new stroke
function nextStroke(){
    // if the user is not currently drawing
    if((conRight.getAttribute('brush').active && conRight.getAttribute('pressed') == true) || (conLeft.getAttribute('brush').active && conLeft.getAttribute('pressed') == true)){
        strokeNum += 1 // increment strokeNum
    }
}

// function to draw which is run on an interval
function drawStroke(){
    //tip.setAttribute('position',conRight.getAttribute('position'))
    //tipR.setAttribute('rotation',{x: conRight.getAttribute('rotation').x+40,y: conRight.getAttribute('rotation').y,z: conRight.getAttribute('rotation').z})
    //tipL.setAttribute('rotation',{x: conRight.getAttribute('rotation').x+40,y: conRight.getAttribute('rotation').y,z: conRight.getAttribute('rotation').z})
    
    // do nothing if trigger is not down
    if((conRight.getAttribute('brush').active && conRight.getAttribute('pressed') == false) || (conLeft.getAttribute('brush').active && conLeft.getAttribute('pressed') == false)){
        currStroke = [] // clear current stroke
        prevCoord = null // remove previous coords
    } else {
        // if trigger is down draw a line
        // check to see if the user has made undo changes prior to drawing this new stroke
        // if the user has, the strokes that were undone will be removed
        if(strokeAnchor != -2){ // if the strokeAnchor has not been changed
            if(strokeAnchor == -1){ // if at the beginning of stroke chain, remove all strokes
                strokesToRemove = strokes
            } else if(strokeAnchor == 0){ // if at some point in stroke chain, remove all strokes that come after it
                strokesToRemove = strokes.slice(strokeAnchor+1)
            }
            // for each stroke to remove, for each line in the stroke, remove the line from the scene and from the canvas
            strokesToRemove.forEach(stroke => {
                stroke.forEach(line => {
                    canvas.removeObject3D(line)
                    canvas.removeAttribute(line)
                })
                
            });
            // update stroke list
            strokes = strokes.slice(0, strokeAnchor+1)
            // reset strokeAnchor
            strokeAnchor = -2; 
            // set number of strokes to be the new strokes length
            strokeNum = strokes.length
        }

        // get ending coordinates for new line
        if(conRight.getAttribute('brush').active){ // if the right hand is the active brush
            end = conRight.getAttribute('position'); // the coords will be the right hand's coords
            color = conRight.getAttribute('brush').color;
        } else { // if the left hand is the active brush
            end = conLeft.getAttribute('position'); // the coords will be the left hand's coords
            color = conLeft.getAttribute('brush').color;
        }

        // determine the starting coords
        if(prevCoord == null){ // if this is the starting line
            prevCoord = {x: end.x, y: end.y, z: end.z}; // make this the starting point for the next line

        } else if(lineNum == 0){ // if the starting point has been found draw the first line
            canvas.setAttribute('line',{start: prevCoord, end: {x: end.x, y: end.y, z: end.z}, color: color, opacity: 1, visible: true}); // draw it
            currStroke.push('line') // add line to currentStroke list
            prevCoord = {x: end.x, y: end.y, z: end.z}; // update prevCoord
            strokes.push(currStroke) // update list of strokes used for undo/redo
            lineNum += 1; // increment line number
        } else { // normal line creation
            canvas.setAttribute('line__'+lineNum,{start: prevCoord, end: {x: end.x, y: end.y, z: end.z}, color: color, opacity: 1, visible: true}); // draw it
            currStroke.push('line__'+lineNum) // add line to currentStroke list
            prevCoord = {x: end.x, y: end.y, z: end.z}; // update prevCoord
            strokes[strokeNum] = currStroke // update list of strokes used for undo/redo
            lineNum += 1; // increment line number
        }
    }
    
}

// function to redo a change
function redo(){
    // check if currently drawing
    if((conRight.getAttribute('brush').active && conRight.getAttribute('pressed') == true) || (conLeft.getAttribute('brush').active && conLeft.getAttribute('pressed') == true)){
        return; // if drawing do nothing
    }
    // check if there is anything to redo
    if(strokeAnchor == -2){
        return;
    }
    // if there is something to redo
    if(strokeAnchor < strokes.length-1){
        strokeAnchor += 1; // find stroke to redraw
        linesToAdd = strokes[strokeAnchor] // find lines to redraw
        // for each line, set visibility of the line back to true
        linesToAdd.forEach(line => {
            lineStats = canvas.getAttribute(line)
            canvas.setAttribute(line,{start: lineStats.start, end: lineStats.end, color: lineStats.color, opacity: lineStats.opcaity, visible: true})
        });
    }
    // if this is the last possible change
    if(strokeAnchor == strokes.length+1){
        strokeAnchor = -2 // reset strokeAnchor
    }
    
}

// function to undo a change
function undo(){
    // check if currently drawing
    if((conRight.getAttribute('brush').active && conRight.getAttribute('pressed') == true) || (conLeft.getAttribute('brush').active && conLeft.getAttribute('pressed') == true)){
        return; // if drawing do nothing
    }
    // if this is the first change
    if(strokeAnchor == -2){
        strokeAnchor = strokes.length-1 // set strokeAnchor to be the last one in the stack
    }
    // if a change can be made
    if(strokeAnchor > -1){
        linesToRemove = strokes[strokeAnchor] // finds lines to hide
        // for each line, set visibilty of the line to false
        linesToRemove.forEach(line => {
            lineStats = canvas.getAttribute(line)
            canvas.setAttribute(line,{start: lineStats.start, end: lineStats.end, color: lineStats.color, opacity: lineStats.opcaity, visible: false})
        });
        strokeAnchor -= 1; // decrement strokeAnchor
    }
    
}


// set both hands to not be pressed
conRight.setAttribute('pressed',false)
conLeft.setAttribute('pressed',false)
// when VR is entered
scene.addEventListener('enter-vr', function () {

    // show both tips
    document.body.style.cursor = "none"
    tipR.setAttribute('visible',true)
    tipL.setAttribute('visible',true)
    // set right hand as default brush
    changeBrushHand(RIGHT);
    // start interval
    interval = setInterval(drawStroke, 1000 / 80)
 });
// when VR is exited
scene.addEventListener('exit-vr', function () {
    // stop the interval
    clearInterval(interval)
    document.body.style.cursor = "default"
 });

 // TODO
 // make eraser on left tip and swap on hand swap