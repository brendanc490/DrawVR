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
            console.log("Lctrl")
            this.el.object3D.position.y -= 0.1
        }else if(map['Space']){
            console.log("space")
            this.el.object3D.position.y += 0.1
        }
    }
});