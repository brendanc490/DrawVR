var scene = document.querySelector("a-scene");

var conRight = scene.querySelector("#right");
var menuCamRig = scene.querySelector("#rig");
var menuCam = scene.querySelector("#menuCam");
var center = scene.querySelector("#center");

menuCam.setAttribute('look-controls', {enabled: false});
menuCam.getObject3D("camera").lookAt(0,0,0);



el = document.createElement('a-entity');
const geometry = new THREE.BufferGeometry();

let t = 0.0174533;
setInterval(rotateCamera,30);

function rotateCamera() {
    menuCam.setAttribute("position", {x: 8 * Math.cos(t), y: menuCam.getAttribute("position").y, z:  8 * Math.sin(t)});
    t+=0.0174533;
    menuCam.getObject3D("camera").lookAt(0,0,0);

}


var isDown = false;
setInterval(drawLine,10);
function drawLine(){
    if(isDown){
        console.log("test");
        console.log(conRight.getAttribute("position"));
        currEntity = document.createElement("a-entity");
        center.appendChild(currEntity);
        currEntity.setAttribute("geometry",{primitive: "plane", width: .1, height: .1});
        currEntity.setAttribute("position",conRight.getAttribute("position"));
        currEntity.setAttribute("rotation",conRight.getAttribute("rotation"));
        currEntity.setAttribute("material",{shader: "flat", side: "double"});
    }
}

/* Input listener to determine if movement or bar switch is desired */
document.addEventListener("keydown", movement);
function movement(event) {
    /* Checks what key was pressed */
    var key = event.key;
    switch(key){
        case "l":
            isDown = true;
            break;

        case "k":
            isDown = false;
            break;
    
    }
}



console.log(conRight.getAttribute("position"));