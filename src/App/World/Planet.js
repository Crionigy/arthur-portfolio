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

        // Set the axis rotation
        this.rotationX = 0;
        this.rotationZ = 0;

        // Create and config the planet
        const planetColor = new THREE.Color(0x383837);
        const geometry = new THREE.TorusGeometry( 10, 3, 16, 100 );
        const materialA = new THREE.MeshBasicMaterial( { color: planetColor } );
        const materialB = new THREE.MeshBasicMaterial( { color: 0x000000 } );
        const materialC = new THREE.MeshBasicMaterial( { color: 0xFFFFFF } );

        this.torusA = new THREE.Mesh( geometry, materialA );
        this.torusB = new THREE.Mesh( geometry, materialB );
        this.torusC = new THREE.Mesh( geometry, materialC );
        this.torusA.rotation.order = 'ZXY';
        this.torusB.rotation.order = 'ZXY';
        this.torusC.rotation.order = 'ZXY';

        this.torusA.position.setX(50);
        this.torusC.position.setX(-50);
        
        // Add the planet to the scene
        this.scene.add(this.torusA);
        this.scene.add(this.torusB);
        this.scene.add(this.torusC);
    }

    // Get called every tick
    update() {
        this.rotationX += 0.0080;
        this.rotationZ += 0.0080;

        this.torusA.rotation.x = this.rotationX;
        this.torusA.rotation.z = this.rotationZ;

        this.torusB.rotation.x = this.rotationX * -1;
        this.torusB.rotation.z = this.rotationZ * -1;

        this.torusC.rotation.x = 0;
        this.torusC.rotation.z = 0;
        this.torusC.rotation.y = 0;
    }
}