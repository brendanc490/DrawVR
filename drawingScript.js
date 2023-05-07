var scene = document.querySelector("a-scene");
var conRight = scene.querySelector("#right");
var menuCamRig = scene.querySelector("#rig");
var menuCam = scene.querySelector("#menuCam");
var center = scene.querySelector("#canvas");

menuCam.setAttribute('look-controls', {enabled: false});
menuCam.getObject3D("camera").lookAt(0,0,0);



el = document.createElement('a-entity');
center.appendChild(el);
const geometry = new THREE.BufferGeometry();
// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.

function calculateVertices(start, end, height) {
    direction.subVectors( p2, p1 );
    //start.x + direction.x = end.x and so on
    // can use this to find width of rectangle to draw, height is constrained by heigh param
    //, essentially just add height/2 to start point and subtract height/2 from other point
    // do all of this to find rectangle, then rotate is based on p2.angleTo(p1) to calculate the correct rectangle

  }
  
  const p1 = new THREE.Vector3(-1, -1, 0);
  const p2 = new THREE.Vector3(1, 1, 1);

  var direction = new THREE.Vector3();
 direction.subVectors( p2, p1 );
 console.log(direction);
 console.log(p2.angleTo(p1))
/*  let output = calculateVertices(p1, p2, 2,1);
    console.log(output[0]);
    console.log(output[1]);
    console.log(output[2]);
    console.log(output[3]);


const vertices = new Float32Array( [
	output[0].x, output[0].y,  output[0].z,
	output[1].x, output[1].y,  output[1].z,
    output[2].x, output[2].y,  output[2].z,

	 output[0].x, output[0].y,  output[0].z,
     output[2].x, output[2].y,  output[2].z,
     output[3].x, output[3].y,  output[3].z,
] );*/


const vertices = new Float32Array( [
	-1.0, -1.0,  0,
	 1.0, -1.0,  -1.0,
	 1.0,  1.0,  0,

	 1.0,  1.0,  0,
	-1.0,  1.0,  1.0,
	-1.0, -1.0,  0
] );

// itemSize = 3 because there are 3 values (components) per vertex
geometry.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
const material = new THREE.MeshBasicMaterial( { color: 0xff0000, side: THREE.DoubleSide } );
const mesh = new THREE.Mesh( geometry, material );
el.setObject3D("line",mesh);
menuCam.getObject3D("camera").lookAt(0,0,0);

let t = 0.0174533;
//setInterval(rotateCamera,30);

function rotateCamera() {
    menuCam.setAttribute("position", {x: 8 * Math.cos(t), y: menuCam.getAttribute("position").y, z:  8 * Math.sin(t)});
    t+=0.0174533;
    menuCam.getObject3D("camera").lookAt(0,0,0);

}