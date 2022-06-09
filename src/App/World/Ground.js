import * as THREE from 'three';
import App from '../App';

export default class Ground {
    constructor() {
        this.app = new App();
        this.debug = this.app.debug;
        this.scene = this.app.scene;

        this.rotate = 0;

        if(this.debug.active) {
            this.setupDebugConfigs();
        }

    }

    update() {

    }

    setupDebugConfigs() {

        this.debugFolder = this.debug.ui.addFolder('Walls');

        this.yWallToggle = {yAxisWall:false};
        this.debugFolder
        .add(this.yWallToggle, 'yAxisWall')
        .onChange(() =>
        {
            this.yWallToggle.yAxisWall ? this.showYWall() : this.hideYWall();
        });

        this.xWallToggle = {xAxisWall:false};
        this.debugFolder
        .add(this.xWallToggle, 'xAxisWall')
        .onChange(() =>
        {
            this.xWallToggle.xAxisWall ? this.showXWall() : this.hideXWall();
        });

        this.zWallToggle = {zAxisWall:false};
        this.debugFolder
        .add(this.zWallToggle, 'zAxisWall')
        .onChange(() =>
        {
            this.zWallToggle.zAxisWall ? this.showZWall() : this.hideZWall();
        });

        const debugPlaneGeometry = new THREE.PlaneGeometry(3000, 3000, 30, 30);
        const degubPlaneMaterial = new THREE.MeshNormalMaterial({ color: 0xff44CC, wireframe: true });

        this.planeY = new THREE.Mesh( debugPlaneGeometry, degubPlaneMaterial );
        this.planeY.position.set(0, 0, 0);

        this.planeX = new THREE.Mesh( debugPlaneGeometry, degubPlaneMaterial );
        this.planeX.rotateY(Math.PI / 2);
        this.planeX.position.set(0, 0, 0);

        this.planeZ = new THREE.Mesh( debugPlaneGeometry, degubPlaneMaterial );
        this.planeZ.rotateX(Math.PI / 2);
        this.planeZ.position.set(0, 0, 0);
    }

    showYWall() {
        this.scene.add(this.planeY);
    }

    hideYWall() {
        this.scene.remove(this.planeY);
    }

    showXWall() {
        this.scene.add(this.planeX);
    }

    hideXWall() {
        this.scene.remove(this.planeX);
    }

    showZWall() {
        this.scene.add(this.planeZ);
    }

    hideZWall() {
        this.scene.remove(this.planeZ);
    }
    
}