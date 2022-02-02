import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'
import { _SRGBAFormat } from 'three'

// Cursor
// const cursor = {
//     x: 0,
//     y: 0,
// }
// window.addEventListener('mousemove', (event) => {
//     cursor.x = event.clientX / sizes.width - 0.5;
//     cursor.y = -(event.clientY / sizes.height - 0.5);
// })

/**
 * Base
 */
// Canvas
const canvas = document.querySelector('canvas.webgl')

// Sizes
const sizes = {
    width: window.innerWidth,
    height: window.innerHeight,
}

window.addEventListener('resize', () => {
    sizes.width = window.innerWidth
    sizes.height = window.innerHeight

    camera.aspect = sizes.width / sizes.height
    camera.updateProjectionMatrix()

    renderer.setSize(sizes.width, sizes.height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
})

window.addEventListener('dblclick', () => {
    const fullscreenElement = document.fullscreenElement || document.webkitFullscreenElement

    if (fullscreenElement)
        if (document.exitFullscreen)
            document.exitFullscreen() 
        else if (document.webkitExitFullscreen)
            document.webkitExitFullscreen() 
    else
        if (canvas.requestFullscreen)
            canvas.requestFullscreen()
        else if (canvas.webkitRequestFullscreen)
            canvas.webkitRequestFullscreen()
})

// Scene
const scene = new THREE.Scene()

// Object
const mesh = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1, 5, 5, 5),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)
scene.add(mesh)

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)

camera.position.z = 3
camera.lookAt(mesh.position)
scene.add(camera)

// Controls
const control = new OrbitControls(camera, canvas);
control.enableDamping = true;

// Renderer
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

const tick = () =>
{
    // Render
    renderer.render(scene, camera)

    // Updating the camera
    // camera.position.x = Math.sin(cursor.x * Math.PI * 2) * 2;
    // camera.position.z = Math.cos(cursor.x * Math.PI * 2) * 2;
    // camera.position.y = cursor.y * 5;
    // camera.lookAt(mesh.position);

    // Updating control
    control.update(); // Update the control every frame to work with damping

    // Call tick again on the next frame
    window.requestAnimationFrame(tick)
}

tick()