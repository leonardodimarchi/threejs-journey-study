import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();

// Creating a group and adding it to the scene

const group = new THREE.Group();
scene.add(group);

const cubeOne = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'cyan' }),
);

const cubeTwo = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'blue' }),
);

const cubeThree = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'green' }),
);

cubeTwo.position.set(2, 0, 0);
cubeThree.position.set(-2, 0, 0);

group.add(cubeOne);
group.add(cubeTwo);
group.add(cubeThree);

group.scale.y = 2;

// Creating an Axes helper
const axesHelper = new THREE.AxesHelper();
scene.add(axesHelper);

// Creating a Camera and adding it into the scene
const cameraSizeInPixels = {
    width: 800,
    height: 600,
};

const fieldOfViewInDegrees = 75;
const aspectRatio = cameraSizeInPixels.width / cameraSizeInPixels.height;

const camera = new THREE.PerspectiveCamera(fieldOfViewInDegrees, aspectRatio);
camera.position.x = 2;
camera.position.y = 1;
camera.position.z = 3;

scene.add(camera);

camera.lookAt(group.position);

// Creating a Renderer
const canvasElement = document.getElementById('myCanvas');

const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
});

renderer.setSize(cameraSizeInPixels.width, cameraSizeInPixels.height);
renderer.render(scene, camera);

