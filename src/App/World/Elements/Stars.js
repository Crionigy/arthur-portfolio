import * as THREE from 'three';
import App from "../../App";

export default class Stars {

    constructor() {
        this.app = new App();
        this.camera = this.app.camera;
        this.materials =  this.app.materials;

        this.smStarGeometry = new THREE.BufferGeometry();
        this.smStarGeometry.setAttribute(
            'position',
            new THREE.BufferAttribute(this.getRandomParticlePos(3000), 3)
        );
        this.smStarGeometry.setAttribute(
            'velocity',
            new THREE.BufferAttribute(new Float32Array(1000), 1)
        );

        this.bgStarGeometry = new THREE.BufferGeometry();
        this.bgStarGeometry.setAttribute(
            'position',
            new THREE.BufferAttribute(this.getRandomParticlePos(3000), 3)
        );
        this.bgStarGeometry.setAttribute(
            'velocity',
            new THREE.BufferAttribute(new Float32Array(1000), 1)
        );

        this.smStarMaterial = new THREE.PointsMaterial({
            size: 0.05,
            map: this.materials.smallStar,
            transparent: true
        });

        this.bgStarMaterial = new THREE.PointsMaterial({
            size: 0.05,
            map: this.materials.smallStar,
            transparent: true
        });

        this.smallStars = new THREE.Points(this.smStarGeometry, this.smStarMaterial);
        this.bigStars = new THREE.Points(this.bgStarGeometry, this.bgStarMaterial);
    }

    getRandomParticlePos(particleCount) {
        const arr =  new Float32Array(particleCount * 3);
        for( let i = 0; i < particleCount; i++) {
            arr[i] = (Math.random() - 0.5) * 10;
        }
        return arr;
    }

    update() {
        this.smallStars.position.x = document.mouseX * 0.0001;
        this.smallStars.position.y = document.mouseY * -0.0001;

        this.bigStars.position.x = document.mouseX * 0.0001;
        this.bigStars.position.y = document.mouseY * -0.0001;
    }
}