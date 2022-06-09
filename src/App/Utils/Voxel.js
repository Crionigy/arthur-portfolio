import * as THREE from 'three';
import App from '../App.js';

export default class Voxel {

    constructor() {
        this.app = new App();
        this.scene = this.app.scene;

        this.voxels = [];

        this.voxelGeometry = new THREE.BoxGeometry( 30, 30, 30);
        
		this.voxelMaterial = new THREE.MeshBasicMaterial({ color: 0x806043 });

    }

    update() {

    }

}