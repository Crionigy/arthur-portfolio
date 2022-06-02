import * as THREE from 'three';
import App from '../App.js';
import ShapeDev from '../Utils/ShapeDev.js';

export default class Voxel {

    constructor() {
        this.app = new App();
        this.scene = this.app.scene;
        this.materials = this.app.materials;
        this.camera = this.app.camera;
        this.shapeDev = new ShapeDev();

        this.voxels = [];

        this.voxelGeometry = new THREE.BoxGeometry( 30, 30, 30);
        
		this.voxelMaterial = new THREE.MeshBasicMaterial({ color: 0x806043 });
		this.voxelMaterialMinus = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
		this.voxelMaterialPlus = new THREE.MeshBasicMaterial({ color: 0x00FF00 });
        this.voxelMaterialOrange = new THREE.MeshBasicMaterial({ color: 0xFF7F00 });
        this.voxelMaterialBlue = new THREE.MeshBasicMaterial({ color: 0x0000FF });

        // vx = number to center the voxel on the grid. This number is the voxel size divided by two (50 / 2 = 25)
        // n = number of voxels before
        //
        // vx + n 

        const cellSize = 20;
        const cell = new Uint8Array(cellSize * cellSize * cellSize);
        
        for (let z = 1; z < cellSize; ++z) {
          for (let x = 1; x < cellSize; ++x) {
            let voxel = this.createVoxel();
            voxel.position.set(x*cellSize, 0, z*cellSize);
            voxel.position.divideScalar( 30 ).floor().multiplyScalar( 30 ).addScalar( 15 );
            this.scene.add(voxel);
          }
        }

        for (let z = 1; z < cellSize; ++z) {
            for (let x = 1; x < cellSize; ++x) {
              let voxel = this.createVoxel();
              voxel.position.set(((x*cellSize)*-1), 0, ((z*cellSize)*-1));
              voxel.position.divideScalar( 30 ).floor().multiplyScalar( 30 ).addScalar( 15 );
              this.scene.add(voxel);
            }
        }

        for (let z = 1; z < cellSize; ++z) {
            for (let x = 1; x < cellSize; ++x) {
              let voxel = this.createVoxel();
              voxel.position.set((x*cellSize), 0, ((z*cellSize)*-1));
              voxel.position.divideScalar( 30 ).floor().multiplyScalar( 30 ).addScalar( 15 );
              this.scene.add(voxel);
            }
        }

        for (let z = 1; z < cellSize; ++z) {
            for (let x = 1; x < cellSize; ++x) {
                let voxel = this.createVoxel();
              voxel.position.set(((x*cellSize)*-1), 0, (z*cellSize));
              voxel.position.divideScalar( 30 ).floor().multiplyScalar( 30 ).addScalar( 15 );
              this.scene.add(voxel);
            }
        }

        // let teste = this.createVoxel();
        // teste.position.set(75, 70, 75);
        // teste.position.divideScalar( 60 ).floor().multiplyScalar( 60 ).addScalar( 30 );
        // this.scene.add(teste);

        // let a = this.createVoxel();
        // a.position.set(-75, 70, 75);
        // a.position.divideScalar( 60 ).floor().multiplyScalar( 60 ).addScalar( 30 );
        // this.scene.add(a);

        // let b = this.createVoxel();
        // b.position.set(75, 70, -75);
        // b.position.divideScalar( 60 ).floor().multiplyScalar( 60 ).addScalar( 30 );
        // this.scene.add(b);

        // let c = this.createVoxel();
        // c.position.set(-75, 70, -75);
        // c.position.divideScalar( 60 ).floor().multiplyScalar( 60 ).addScalar( 30 );
        // this.scene.add(c);
    
        
    }

    update() {

    }

    createVoxel() {
        return new THREE.Mesh( this.voxelGeometry, this.voxelMaterial );
    }

    createVoxelMinusMinus() {
        return new THREE.Mesh( this.voxelGeometry, this.voxelMaterialMinus );
    }

    createVoxelPlusPlus() {
        return new THREE.Mesh( this.voxelGeometry, this.voxelMaterialPlus );
    }

    createVoxelMinusPlus() {
        return new THREE.Mesh( this.voxelGeometry, this.voxelMaterialOrange );
    }

    createVoxelPlusMinus() {
        return new THREE.Mesh( this.voxelGeometry, this.voxelMaterialBlue );
    }

}