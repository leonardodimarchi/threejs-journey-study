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
}

const fieldOfViewInDegrees = 75;
const aspectRatio = cameraSizeInPixels.width / cameraSizeInPixels.height;

const camera = new THREE.PerspectiveCamera(fieldOfViewInDegrees, aspectRatio);
camera.position.z = 3;

scene.add(camera);

// Creating a Renderer
const canvasElement = document.getElementById('myCanvas');

const renderer = new THREE.WebGLRenderer({
    canvas: canvasElement,
})

renderer.setSize(cameraSizeInPixels.width, cameraSizeInPixels.height);
renderer.render(scene, camera);


