import * as THREE from "../build/three.module.js";

var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	1000
);

var renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var boxGeometry = new THREE.BoxGeometry(20, 20, 20);
var icoGeometry = new THREE.IcosahedronGeometry(20, 0);
var capsuleGeometry = new THREE.CapsuleGeometry(20, 20, 20, 20);
var circleGeomtry = new THREE.CircleGeometry(20, 50, 0, 2);
//polyhedron(다면체)

//var material = new THREE.MeshLambertMaterial({ color: 0xfd59d7 });

//edges
/*const edges = new THREE.EdgesGeometry(boxGeometry);
const line = new THREE.LineSegments(
	edges,
	new THREE.LineBasicMaterial({ color: 0xfffffff })
);
scene.add(line);
*/
var material = new THREE.MeshNormalMaterial(20);
var cube = new THREE.Mesh(boxGeometry, material);
scene.add(cube);

cube.rotation.x = 0.1;
cube.rotation.y = -0.25;
camera.position.z = 100;

var light = new THREE.PointLight(0xffff00);
light.position.set(10, 0, 25);
scene.add(light);

var render = function () {
	requestAnimationFrame(render);

	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	camera.updateProjectionMatrix();

	renderer.render(scene, camera);
};

render();
