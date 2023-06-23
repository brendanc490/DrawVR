/* Code to register thumbstick behavior for left hand */
AFRAME.registerComponent('thumbstick-left',{
init: function () {
    this.el.addEventListener('thumbstickmoved', this.logThumbstick);
},
    logThumbstick: function (evt) {
        if(queriesFound == false){
            return
        }
        if (evt.detail.y > 0.95) {
            //leftThumb.textContent = 'Yes'; 
            isLeftStick = true; 
            leftAxis.setAttribute("value", "Left Axis: Yes"); 
            leftAxis.setAttribute("color","green")
        }
        if (evt.detail.y < -0.95) { 
            //leftThumb.textContent = 'Yes'; 
            isLeftStick = true; 
            leftAxis.setAttribute("value", "Left Axis: Yes"); 
            leftAxis.setAttribute("color","green")
        }
        if (evt.detail.x < -0.95) { 
            //leftThumb.textContent = 'Yes'; 
            isLeftStick = true; 
            leftAxis.setAttribute("value", "Left Axis: Yes"); 
            leftAxis.setAttribute("color","green")
        }
        if (evt.detail.x > 0.95) {
            //leftThumb.textContent = 'Yes'; 
            isLeftStick = true; 
            leftAxis.setAttribute("value", "Left Axis: Yes"); 
            leftAxis.setAttribute("color","green")
        }
        leftThumbInd.setAttribute("position",{x: 0.5*evt.detail.x, y: 0.5*-evt.detail.y, z: .001})
        
        isLeft = !(conLeft.getAttribute("position").x == 0 && conLeft.getAttribute("position").y == 0 && conLeft.getAttribute("position").z == 0);
        if(isLeft){
            left.setAttribute("value", "Left Controller Connected: Yes"); left.setAttribute("color","green")
        }
    }
});

/*  */
AFRAME.registerComponent('thumbstick-right',{
init: function () {
    this.el.addEventListener('thumbstickmoved', this.logThumbstick);
},
    logThumbstick: function (evt) {
        if(queriesFound == false){
            return
        }
        if (evt.detail.y > 0.95) {
            //rightThumb.textContent = 'Yes'; 
            isRightStick = true; 
            rightAxis.setAttribute("value", "Right Axis: Yes"); 
            rightAxis.setAttribute("color","green")
            
        }
        if (evt.detail.y < -0.95) { 
            //rightThumb.textContent = 'Yes'; 
            isRightStick = true; 
            rightAxis.setAttribute("value", "Right Axis: Yes"); 
            rightAxis.setAttribute("color","green")
            
        }
        if (evt.detail.x < -0.95) { 
            //rightThumb.textContent = 'Yes'; 
            isRightStick = true; 
            rightAxis.setAttribute("value", "Right Axis: Yes"); 
            rightAxis.setAttribute("color","green")
            
        }
        if (evt.detail.x > 0.95) {
            //rightThumb.textContent = 'Yes'; 
            isRightStick = true; 
            rightAxis.setAttribute("value", "Right Axis: Yes"); 
            rightAxis.setAttribute("color","green")
            
        }
        rightThumbInd.setAttribute("position",{x: 0.5*evt.detail.x, y: 0.5*-evt.detail.y, z: .001})
        isRight = !(conRight.getAttribute("position").x == 0 && conRight.getAttribute("position").y == 0 && conRight.getAttribute("position").z == 0);
        if(isRight){
            right.setAttribute("value", "Right Controller Connected: Yes"); right.setAttribute("color","green")
        }
    }
});

AFRAME.registerComponent('trackpad-left',{
    init: function () {
        this.el.addEventListener('trackpadmoved', this.logTrackpad);
    },
        logTrackpad: function (evt) {
            if(queriesFound == false){
                return
            }
            if (evt.detail.y > 0.2) {
                //leftThumb.textContent = 'Yes'; 
                isLeftTrack = true; 
                leftTrackpad.setAttribute("value", "Left Trackpad: Yes"); 
                leftTrackpad.setAttribute("color","green")
            }
            if (evt.detail.y < -0.2) { 
                //leftThumb.textContent = 'Yes'; 
                isLeftTrack = true; 
                leftTrackpad.setAttribute("value", "Left Trackpad: Yes"); 
                leftTrackpad.setAttribute("color","green")
            }
            if (evt.detail.x < -0.2) { 
                //leftThumb.textContent = 'Yes'; 
                isLeftTrack = true; 
                leftTrackpad.setAttribute("value", "Left Trackpad: Yes"); 
                leftTrackpad.setAttribute("color","green")
            }
            if (evt.detail.x > 0.2) {
                //leftThumb.textContent = 'Yes'; 
                isLeftTrack = true; 
                leftTrackpad.setAttribute("value", "Left Trackpad: Yes"); 
                leftTrackpad.setAttribute("color","green")
            }
            leftTrackInd.setAttribute("position",{x: 0.5*evt.detail.x, y: 0.5*-evt.detail.y, z: .001})
            
            /*isLeft = !(conLeft.getAttribute("position").x == 0 && conLeft.getAttribute("position").y == 0 && conLeft.getAttribute("position").z == 0);
            if(isLeft){
                left.setAttribute("value", "Left Controller Connected: Yes"); left.setAttribute("color","green")
            }*/
        }
    });
    
    /*  */
    AFRAME.registerComponent('trackpad-right',{
    init: function () {
        this.el.addEventListener('trackpadmoved', this.logTrackpad);
    },
        logTrackpad: function (evt) {
            if(queriesFound == false){
                return
            }
            if (evt.detail.y > 0.2) {
                //rightThumb.textContent = 'Yes'; 
                isRightTrack = true; 
                rightTrackpad.setAttribute("value", "Right Trackpad: Yes"); 
                rightTrackpad.setAttribute("color","green")
            }
            if (evt.detail.y < -0.2) { 
                //rightThumb.textContent = 'Yes'; 
                isRightTrack = true; 
                rightTrackpad.setAttribute("value", "Right Trackpad: Yes"); 
                rightTrackpad.setAttribute("color","green")
            }
            if (evt.detail.x < -0.2) { 
                //rightThumb.textContent = 'Yes'; 
                isRightTrack = true; 
                rightTrackpad.setAttribute("value", "Right Trackpad: Yes"); 
                rightTrackpad.setAttribute("color","green")
            }
            if (evt.detail.x > 0.2) {
                //rightThumb.textContent = 'Yes'; 
                isRightTrack = true; 
                rightTrackpad.setAttribute("value", "Right Trackpad: Yes"); 
                rightTrackpad.setAttribute("color","green")
            }
            rightTrackInd.setAttribute("position",{x: 0.5*evt.detail.x, y: 0.5*-evt.detail.y, z: .001})
            /*isRight = !(conRight.getAttribute("position").x == 0 && conRight.getAttribute("position").y == 0 && conRight.getAttribute("position").z == 0);
            if(isRight){
                right.setAttribute("value", "Right Controller Connected: Yes"); right.setAttribute("color","green")
            }*/
        }
    });

AFRAME.registerComponent('button-listener-r', {
init: function () {
    var el = this.el;

    el.addEventListener('gripdown', function (evt) {
        if(queriesFound == false){
            return
        }
        gripRightPressed = true;
        rightGrip.setAttribute("value", "Right Grip: Yes"); rightGrip.setAttribute("color","green")
        gripRightButtonAnimation.setAttribute("button", {isPressed: true})
    });
    el.addEventListener('gripup', function (evt) {
        if(queriesFound == false){
            return
        }
        gripRightButtonAnimation.setAttribute("button", {isPressed: false})
    });

    el.addEventListener('triggerdown', function (evt) {
        if(queriesFound == false){
            return
        }
        triggerRightPressed = true;
        rightTrigger.setAttribute("value", "Right Trigger: Yes"); rightTrigger.setAttribute("color","green")
        triggerRightButtonAnimation.setAttribute("button", {isPressed: true})
    });
    el.addEventListener('triggerup', function (evt) {
        if(queriesFound == false){
            return
        }
        triggerRightButtonAnimation.setAttribute("button", {isPressed: false})
    });

    el.addEventListener('abuttondown', function (evt) {
        if(queriesFound == false){
            return
        }
        aPressed = true;
        a.setAttribute("value", "A Button: Yes"); a.setAttribute("color","green")
        aButtonAnimation.setAttribute("button", {isPressed: true})
    });
    el.addEventListener('abuttonup', function (evt) {
        if(queriesFound == false){
            return
        }
        aButtonAnimation.setAttribute("button", {isPressed: false})
    });

    el.addEventListener('bbuttondown', function (evt) {
        if(queriesFound == false){
            return
        }
        bPressed = true;
        b.setAttribute("value", "B Button: Yes"); b.setAttribute("color","green")
        bButtonAnimation.setAttribute("button", {isPressed: true})
    });
    el.addEventListener('bbuttonup', function (evt) {
        if(queriesFound == false){
            return
        }
        bButtonAnimation.setAttribute("button", {isPressed: false})
    });

    /*el.addEventListener('menudown', function (evt) {
        menuRightPressed = true;
        rightMenu.setAttribute("value", "Right Menu: Yes"); rightMenu.setAttribute("color","green")
    });*/

    el.addEventListener('thumbstickdown', function (evt) {
        thumbRightPressed = true
        rightStickPress.setAttribute("value", "Right Thumbstick Pressed: Yes"); rightStickPress.setAttribute("color","green")
        rightThumbInd.setAttribute("button", {isPressed: true})
    });
    el.addEventListener('thumbstickup', function (evt) {
        rightThumbInd.setAttribute("button", {isPressed: false})
    });

    el.addEventListener('trackpaddown', function (evt) {
        trackRightPressed = true
        rightTrackPress.setAttribute("value", "Right Trackpad Pressed: Yes"); rightTrackPress.setAttribute("color","green")
        rightTrackInd.setAttribute("button", {isPressed: true})
    });

    el.addEventListener('trackpadup', function (evt) {
        rightTrackInd.setAttribute("button", {isPressed: false})
    });

    el.addEventListener('trackpadtouchstart', function (evt) {
        rightTrackInd.setAttribute("visible", true)
    });

    el.addEventListener('trackpadtouchend', function (evt) {
        rightTrackInd.setAttribute("visible", false)
    });
}
});

AFRAME.registerComponent('button-listener-l', {
init: function () {
    var el = this.el;

    el.addEventListener('gripdown', function (evt) {
        if(queriesFound == false){
            return
        }
        gripLeftPressed = true;
        leftGrip.setAttribute("value", "Left Grip: Yes"); leftGrip.setAttribute("color","green")
        gripLeftButtonAnimation.setAttribute("button", {isPressed: true})
    });
    el.addEventListener('gripup', function (evt) {
        if(queriesFound == false){
            return
        }
        gripLeftButtonAnimation.setAttribute("button", {isPressed: false})
    });

    el.addEventListener('triggerdown', function (evt) {
        if(queriesFound == false){
            return
        }
        triggerLeftPressed = true;
        leftTrigger.setAttribute("value", "Left Trigger: Yes"); leftTrigger.setAttribute("color","green")
        triggerLeftButtonAnimation.setAttribute("button", {isPressed: true})
    });
    el.addEventListener('triggerup', function (evt) {
        if(queriesFound == false){
            return
        }
        triggerLeftButtonAnimation.setAttribute("button", {isPressed: false})
    });

    el.addEventListener('xbuttondown', function (evt) {
        if(queriesFound == false){
            return
        }
        xPressed = true;
        x.setAttribute("value", "X Button: Yes"); x.setAttribute("color","green")
        xButtonAnimation.setAttribute("button", {isPressed: true})
    });
    el.addEventListener('xbuttonup', function (evt) {
        if(queriesFound == false){
            return
        }
        xButtonAnimation.setAttribute("button", {isPressed: false})
    });

    el.addEventListener('ybuttondown', function (evt) {
        if(queriesFound == false){
            return
        }
        yPressed = true;
        y.setAttribute("value", "Y Button: Yes"); y.setAttribute("color","green")
        yButtonAnimation.setAttribute("button", {isPressed: true})
    });
    el.addEventListener('ybuttonup', function (evt) {
        if(queriesFound == false){
            return
        }
        yButtonAnimation.setAttribute("button", {isPressed: false})
    });

    /*el.addEventListener('menudown', function (evt) {
        menuLeftPressed = true;
        leftMenu.setAttribute("value", "Left Menu: Yes"); leftMenu.setAttribute("color","green")
    });*/

    el.addEventListener('thumbstickdown', function (evt) {
        thumbLeftPressed = true
        leftStickPress.setAttribute("value", "Left Thumbstick Pressed: Yes"); leftStickPress.setAttribute("color","green")
        leftThumbInd.setAttribute("button", {isPressed: true})
    });
    el.addEventListener('thumbstickup', function (evt) {
        leftThumbInd.setAttribute("button", {isPressed: false})
    });

    el.addEventListener('trackpaddown', function (evt) {
        trackLeftPressed = true
        leftTrackPress.setAttribute("value", "Left Trackpad Pressed: Yes"); leftTrackPress.setAttribute("color","green")
        leftTrackInd.setAttribute("button", {isPressed: true})
    });

    el.addEventListener('trackpadup', function (evt) {
        leftTrackInd.setAttribute("button", {isPressed: false})
    });

    el.addEventListener('trackpadtouchstart', function (evt) {
        leftTrackInd.setAttribute("visible", true)
    });

    el.addEventListener('trackpadtouchend', function (evt) {
        leftTrackInd.setAttribute("visible", false)
    });
}
});