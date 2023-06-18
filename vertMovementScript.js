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
    //menuCamRig.setAttribute('rotation', {x: menuCamRig.getAttribute('rotation').x - e.movementY*.1, y: menuCamRig.getAttribute('rotation').y - e.movementX*.1, z: 0});
});