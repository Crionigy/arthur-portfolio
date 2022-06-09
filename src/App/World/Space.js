import * as THREE from 'three';
import App from '../App.js'

export default class Space {
    constructor() {
        this.app = new App();
        this.scene = this.app.scene;
        this.materials = this.app.materials;

        const geometryA = new THREE.BufferGeometry();
        const geometryB = new THREE.BufferGeometry();
        const geometryC = new THREE.BufferGeometry();
        const material = new THREE.PointsMaterial({ size: 1 });

        geometryA.setAttribute("position", new THREE.BufferAttribute(this.getRandomParticelPos(10000), 3));
        //geometryB.setAttribute("position", new THREE.BufferAttribute(this.getRandomParticelPosPas(10000), 3));

        const vertices = new Float32Array( [
            -1.0, -1.0,  1.0,
             1.0, -1.0,  1.0,
             1.0,  1.0,  1.0,
        
             1.0,  1.0,  1.0,
            -1.0,  1.0,  1.0,
            -1.0, -1.0,  1.0
        ] );

        const vertices2 = new Float32Array( [
            -2.0, -2.0,  2.0,
             2.0, -2.0,  2.0,
             2.0,  2.0,  2.0,
        
             2.0,  2.0,  2.0,
            -2.0,  2.0,  2.0,
            -2.0, -2.0,  2.0
        ] );

        const vertices3 = new Float32Array( [
            -0.5, -0.5,  0.5,
             0.5, -0.5,  0.5,
             0.5,  0.5,  0.5,
        
             0.5,  0.5,  0.5,
            -0.5,  0.5,  0.5,
            -0.5, -0.5,  0.5
        ] );
        
        geometryA.setAttribute( 'position', new THREE.BufferAttribute( vertices, 3 ) );
        geometryB.setAttribute( 'position', new THREE.BufferAttribute( vertices2, 3 ) );
        geometryC.setAttribute( 'position', new THREE.BufferAttribute( vertices3, 3 ) );

        const cellSize = 20;

        for (let z = 1; z < cellSize; ++z) {
            for (let x = 1; x < cellSize; ++x) {
                this.scene.add(new THREE.Points(geometryA, material));
            }
          }

        this.scene.add(new THREE.Points(geometryA, material));
        //this.scene.add(new THREE.Points(geometryB, material));
        //this.scene.add(new THREE.Points(geometryC, material));
    }

    getRandomParticelPos (particleCount) {
        const arr = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
          arr[i] = ((Math.random() * 1000));
          //arr[i].push((Math.random() * -1000));
        }
        return arr;
    };

    getRandomParticelPosPas (particleCount) {
        const arr = new Float32Array(particleCount * 3);
        for (let i = 0; i < particleCount; i++) {
          arr[i] = ((Math.random() * -1000));
          //arr[i].push((Math.random() * -1000));
        }
        return arr;
    };

    update() {
       
    }
}