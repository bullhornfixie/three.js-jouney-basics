import './style.css'
import * as THREE from 'three'

// 3 things needed to display anything in three.js 
// scene, camera and renderer 
// we render the scene with the camera 

// Scene 
const scene = new THREE.Scene()

// Red Cube 
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'red' })
const mesh = new THREE.Mesh(geometry, material)
scene.add(mesh)

console.log(THREE)
console.log(mesh.position.length())    // distance from center of scene to object position
console.log(mesh.position.normalize()) // reduces the length to 1 

// Position 
// mesh.position.x = 1
// mesh.position.y = 1
// mesh.position.z = 3
mesh.position.set(0.7, -0.6, 1)        // set the values of x, y, z axis at once 

// Scale 
// mesh.scale.x = 2
// mesh.scale.y = 0.5
// mesh.scale.z = 0.5
mesh.scale.set(1, 1, 1)   // (1, 1, 1) is neutral setting 


// Axes Helper 
const axesHelper = new THREE.AxesHelper(2) // add axes and change length 
scene.add(axesHelper)

// Sizes
const sizes = {
  width: 800, 
  height: 600,
}

// Camera 
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3
scene.add(camera)

// Renderer 
const canvas = document.querySelector('.webgl')
const renderer = new THREE.WebGLRenderer({
    canvas: canvas
})
renderer.setSize(sizes.width, sizes.height)
// also resizes canvas element in DOM

renderer.render(scene, camera)