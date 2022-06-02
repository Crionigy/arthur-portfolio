import * as THREE from 'three';
import App from '../App.js';

export default class Planet {

    constructor() {
        // Initializing context
        this.app = new App();
        this.renderer = this.app.renderer;
        this.scene = this.app.scene;
        this.camera = this.app.camera;
        this.materials = this.app.materials;

        this.rotationX = 0;
        this.rotationZ = 0;

        // Create and config the planet
        const planetColor = new THREE.Color(0xFDFD96);
        const geometry = new THREE.TorusGeometry(800, 80, 48, 100);
        const material = new THREE.MeshBasicMaterial({ color: planetColor, fog: true });

        this.torus = new THREE.Mesh(geometry, material);
        this.torus.position.y = 0;
        this.torus.rotation.order = 'ZXY';

        this.scene.add(this.torus);
    }

    // Get called every tick
    update() {
        this.rotationX += 0.0080;
        this.rotationZ += 0.0099;
        this.rotationY += 0.00009;

        this.torus.rotation.z = this.rotationZ;
        this.torus.rotation.x = this.rotationX;
        //this.torus.rotation.y = this.rotationY;
    }
}