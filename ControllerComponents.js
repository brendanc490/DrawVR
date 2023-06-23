AFRAME.registerComponent('thumbstick-right',{
    init: function () {
        this.el.addEventListener('thumbstickmoved', this.logThumbstick);
    },
    logThumbstick: function (evt) {
        if (evt.detail.y > 0.2) {

        }
        if (evt.detail.y < -0.2) { 

        }
        if (evt.detail.x < -0.2) { 

        }
        if (evt.detail.x > 0.2) {

        }

    }
});

AFRAME.registerComponent('thumbstick-left',{
    init: function () {
        this.el.addEventListener('thumbstickmoved', this.logThumbstick);
    },
    
    logThumbstick: function (evt) {
        if (evt.detail.y > 0.2) {

        }
        if (evt.detail.y < -0.2) { 

        }
        if (evt.detail.x < -0.2) { 

        }
        if (evt.detail.x > 0.2) {

        } 

    }
});
    
/*  */
AFRAME.registerComponent('trackpad-right',{
    init: function () {
        this.el.addEventListener('trackpadmoved', this.logTrackpad);
    },

    logTrackpad: function (evt) {
        if (evt.detail.y > 0.2) {

        }
        if (evt.detail.y < -0.2) { 

        }
        if (evt.detail.x < -0.2) { 

        }
        if (evt.detail.x > 0.2) {

        }

        

    }
});

AFRAME.registerComponent('trackpad-left',{
    init: function () {
        this.el.addEventListener('trackpadmoved', this.logTrackpad);
    },
    logTrackpad: function (evt) {
        if (evt.detail.y > 0.2) {

        }
        if (evt.detail.y < -0.2) { 

        }
        if (evt.detail.x < -0.2) { 

        }
        if (evt.detail.x > 0.2) {

        }

    }
});

AFRAME.registerComponent('button-listener-r', {
    init: function () {
        var el = this.el;

        el.addEventListener('gripdown', function (evt) {

        });

        el.addEventListener('gripup', function (evt) {

        });

        el.addEventListener('triggerdown', function (evt) {

        });

        el.addEventListener('triggerup', function (evt) {

        });

        el.addEventListener('abuttondown', function (evt) {

        });
        el.addEventListener('abuttonup', function (evt) {

        });

        el.addEventListener('bbuttondown', function (evt) {

        });

        el.addEventListener('bbuttonup', function (evt) {

        });

        /*el.addEventListener('menudown', function (evt) {
            
        });*/

        el.addEventListener('thumbstickdown', function (evt) {

        });

        el.addEventListener('thumbstickup', function (evt) {
        
        });

        el.addEventListener('trackpaddown', function (evt) {
            
        });

        el.addEventListener('trackpadup', function (evt) {
            
        });

        el.addEventListener('trackpadtouchstart', function (evt) {
            
        });

        el.addEventListener('trackpadtouchend', function (evt) {
            
        });
    }
});

AFRAME.registerComponent('button-listener-l', {
    init: function () {
        var el = this.el;

        el.addEventListener('gripdown', function (evt) {

        });

        el.addEventListener('gripup', function (evt) {

        });

        el.addEventListener('triggerdown', function (evt) {

        });

        el.addEventListener('triggerup', function (evt) {

        });

        el.addEventListener('xbuttondown', function (evt) {

        });

        el.addEventListener('xbuttonup', function (evt) {

        });

        el.addEventListener('ybuttondown', function (evt) {

        });

        el.addEventListener('ybuttonup', function (evt) {

        });

        /*el.addEventListener('menudown', function (evt) {
            
        });*/

        el.addEventListener('thumbstickdown', function (evt) {

        });
        el.addEventListener('thumbstickup', function (evt) {
            
        });

        el.addEventListener('trackpaddown', function (evt) {

        });

        el.addEventListener('trackpadup', function (evt) {

        });

        el.addEventListener('trackpadtouchstart', function (evt) {

        });

        el.addEventListener('trackpadtouchend', function (evt) {

        });
    }
});