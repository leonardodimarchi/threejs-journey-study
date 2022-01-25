import './style.css';
import * as THREE from 'three';

const scene = new THREE.Scene();

// Creating a Box (Mesh) and adding it into the scene
const boxGeometry = new THREE.BoxGeometry(1, 1, 1);
const blueMaterial = new THREE.MeshBasicMaterial({ color: 'cyan' });
const boxMesh = new THREE.Mesh(boxGeometry, blueMaterial);

scene.add(boxMesh);

// Creating a Camera and adding it into the scene
const cameraSizeInPixels = {
    width: 800,
    height: 600,
};

const fieldOfViewInDegrees = 75;
const aspectRatio = cameraSizeInPixels.width / cameraSizeInPixels.height;

const camera = new THREE.PerspectiveCamera(fieldOfViewInDegrees, aspectRatio);
camera.position.z = 3;

scene.add(camera);

// Creating a Renderer
const canvasElement = document.getElementById('myCanvas');

const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
});

renderer.setSize(cameraSizeInPixels.width, cameraSizeInPixels.height);

// Animations

// With Clock
const clock = new THREE.Clock();
const animationLoop = () => {
    
    const elapsedTime = clock.getElapsedTime();

    camera.position.y = Math.sin(elapsedTime); // Bounce up and down
    camera.position.x = Math.cos(elapsedTime); // Bounce right and left
    camera.lookAt(boxMesh.position);

    renderer.render(scene, camera);
    window.requestAnimationFrame(animationLoop);
}

animationLoop();

// With deltaTime

// let time = Date.now(); // Timestamp to fix FPS difference

// const animationLoop = () => {

//     const currentTime = Date.now();
//     const deltaTime = currentTime - time; // Difference between currentTime and time
//     time = currentTime;

//     // Delta time will maintain the same speed on different computers

//     boxMesh.rotateX(0.001 * deltaTime);
//     boxMesh.rotateY(0.001 * deltaTime);
//     boxMesh.rotateZ(0.001 * deltaTime);

//     renderer.render(scene, camera);
//     window.requestAnimationFrame(animationLoop);
// }

// animationLoop();