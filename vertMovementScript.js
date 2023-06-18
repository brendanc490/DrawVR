map = {}
document.addEventListener('keydown', function (e) {
    map[e.code] = true
})
document.addEventListener('keyup', function (e) {
    delete map[e.code]
})

AFRAME.registerComponent('vert-movement-listener', {
    tick: function () {
        if(map['ControlLeft']){
            this.el.object3D.position.y -= 0.1
        }else if(map['Space']){
            this.el.object3D.position.y += 0.1
        }
    }
});

document.addEventListener("mousemove", function (e) {
    
    menuCam.components['look-controls'].pitchObject.rotation.set(Math.PI/180*(menuCam.components['look-controls'].pitchObject.rotation.x + e.movementX),0,0);
    menuCam.components['look-controls'].yawObject.rotation.set(0,Math.PI/180*(menuCam.components['look-controls'].pitchObject.rotation.y + e.movementY),0);
});