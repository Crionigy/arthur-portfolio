import * as THREE from 'three';
import App from '../App';

export default class Ground {
    constructor() {
        this.app = new App();
        this.debug = this.app.debug;
        this.scene = this.app.scene;

        this.rotate = 0;

        if(this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('Walls');

            this.yWallToggle = {yAxisWall:false};
            this.debugFolder
            .add(this.yWallToggle, 'yAxisWall')
            .onChange(() =>
            {
                this.yWallToggle.yAxisWall ? this.showYWall() : this.hideYWall();
            });

            this.zWallToggle = {zAxisWall:false};
            this.debugFolder
            .add(this.zWallToggle, 'zAxisWall')
            .onChange(() =>
            {
                this.zWallToggle.zAxisWall ? this.showZWall() : this.hideZWall();
            });
        }

        const geometry = new THREE.PlaneGeometry(1500, 1500, 25, 25);
        const material = new THREE.MeshNormalMaterial({ color: 0xff44CC, wireframe: true });

        this.planeY = new THREE.Mesh( geometry, material );
        this.planeY.position.set(0, 0, 0);

        this.planeZ = new THREE.Mesh( geometry, material );
        this.planeZ.rotateX(Math.PI / 2);
        this.planeZ.position.set(0, 0, 0);
    }

    update() {

    }

    showYWall() {
        this.scene.add(this.planeY);
    }

    hideYWall() {
        this.scene.remove(this.planeY);
    }

    showZWall() {
        this.scene.add(this.planeZ);
    }

    hideZWall() {
        this.scene.remove(this.planeZ);
    }
    
}