AFRAME.registerComponent('modify-materials', {
    init: function () {
      // Wait for model to load.
      this.el.addEventListener('model-loaded', () => {
        // Grab the mesh / scene.
        const obj = this.el.getObject3D('mesh');
        obj.position.set(0,.055,0)
        // Go over the submeshes and modify materials we want.
        obj.traverse(node => {
            // set the scale to be .3 of original model
          if(node.scale != null){
            node.scale.set(.3,.3,.3)
          }
          // set material to be flat shaded, ignores lighting
          if(node.material != null){
            node.material = new THREE.MeshBasicMaterial({ map: node.material.map });
          }
        });
      });
    }
  });

  // component to look at drawing when in the lobby
AFRAME.registerComponent('look-at', {
    schema: { type: 'selector' },
  
    init: function () {},
  
    tick: function () {
      this.el.object3D.lookAt(this.data.object3D.position)
    }
  });

  // component that indicates which hand is the brush and what the color is for that brush
AFRAME.registerComponent('brush', {
    schema: {
        active : {type: 'boolean', default: false},
        color: {type: 'string', default: 'white'}
        },

    init: function () {}
}); 

// component that indicates if the trigger is pressed for either hand
AFRAME.registerComponent('pressed', {
    schema: {type: 'boolean', default: false},

    init: function () {}
});
  
// listeners for right hand
AFRAME.registerComponent('button-listener-r', {
    init: function () {
        var el = this.el;
        // when trigger is pressed, set trigger to be down and go on to the next stroke
        el.addEventListener('triggerdown', function (evt) {
            this.setAttribute('pressed',true)
            nextStroke()
        });
        // when trigger is done being pressed, set trigger to be up
        el.addEventListener('triggerup', function (evt) {
            this.setAttribute('pressed',false)
        });
        // when abutton is pressed, move right hand color forward by 1
        el.addEventListener('abuttondown', function (evt) {
            changeColor(true,true)
        });
        // when bbutton is pressed, move right hand color backward by 1
        el.addEventListener('bbuttondown', function (evt) {
            changeColor(true,false)
        });
        // when thumbstick is pressed, make the right hand the drawing hand
        el.addEventListener('thumbstickdown', function (evt){
            changeBrushHand(true)
        })
        // when grip is pressed, redo the last change
        el.addEventListener('gripdown', function (evt) {
            redo()
        });
    }
});

// listeners for left hand
AFRAME.registerComponent('button-listener-l', {
    init: function () {
        var el = this.el;
        // when trigger is pressed, set trigger to be down and go on to the next stroke
        el.addEventListener('triggerdown', function (evt) {
            this.setAttribute('pressed',true)
            nextStroke()
        });
        // when trigger is done being pressed, set trigger to be up
        el.addEventListener('triggerup', function (evt) {
            this.setAttribute('pressed',false)
        });
        // when xbutton is pressed, move left hand color forward by 1
        el.addEventListener('xbuttondown', function (evt) {
            changeColor(false,true)
        });
        // when ybutton is pressed, move left hand color backward by 1
        el.addEventListener('ybuttondown', function (evt) {
            changeColor(false,false)
        });
        // when thumbstick is pressed, make the left hand the drawing hand
        el.addEventListener('thumbstickdown', function (evt){
            changeBrushHand(false)
        })
        // when grip is pressed, undo the last change
        el.addEventListener('gripdown', function (evt) {
            undo()
        });
    }
});

AFRAME.registerComponent('thumbstick-logging',{
    init: function () {
      this.el.addEventListener('thumbstickmoved', this.logThumbstick);
    },
    logThumbstick: function (evt) {
        if(!this.el.getAttribute('brush').active){
            if(evt.detail.x != 0 && evt.detail.y != 0){
                moveRig(evt.detail.x,evt.detail.y)
            }
        }
    }
  });