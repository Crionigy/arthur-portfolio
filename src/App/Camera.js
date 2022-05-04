import * as THREE from 'three';
import App from './App.js';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';

export default class Camera {
    
    constructor() {

        this.app = new App();
        this.debug = this.app.debug;
        this.sizes = this.app.sizes;
        this.scene = this.app.scene;
        this.canvas = this.app.canvas;
        this.config = this.app.config;

        this.setInstance();
        this.setControls();
        this.setCamAngles();
        this.setTransitions();

        if(this.debug.active) {
            this.debugFolder = this.debug.ui.addFolder('camera');

            this.positionDebugFolder = this.debugFolder.addFolder('cameraPosition');
            this.positionDebugFolder.add(this.instance.position, 'x', -20, 20, 0.1);
            this.positionDebugFolder.add(this.instance.position, 'y', -20, 20, 0.1);
            this.positionDebugFolder.add(this.instance.position, 'z', -60, 60, 0.1);
            
            this.targetDebugFolder = this.debugFolder.addFolder('cameraTarget');
            this.targetDebugFolder.add(this.controls.target, 'x', -20, 20, 0.1);
            this.targetDebugFolder.add(this.controls.target, 'y', -20, 20, 0.1);
            this.targetDebugFolder.add(this.controls.target, 'z', -20, 20, 0.1);
            
            /*
            this.cam = false;
            this.cameraToggle = {unlockCamera:false};
            this.debugFolder
            .add(this.cameraToggle, 'unlockCamera')
            .onChange(() =>
            {
                this.cam ? this.camAngle.default() : this.camAngle.unlocked()
            });
            */
        }
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(50, this.sizes.width / this.sizes.height, 0.4, 500);
        this.instance.position.x = 15.9;
        this.instance.position.y = 6.8;
        this.instance.position.z = 100;
        this.scene.add(this.instance);
    }

    setControls() {
        this.controls = new OrbitControls(this.instance, this.canvas);
        this.controls.enableDamping = true;
        this.controls.enablePan = false;
        this.controls.rotateSpeed = 1.2;
        this.controls.zoomSpeed = 0.8;
        this.controls.target.z = -1;
    }

    
    setCamAngles() {
        this.camAngle = {}

        this.camAngle.unlocked = () =>
        {
            this.controls.maxDistance = 30;
            this.controls.minDistance = 0;
            this.controls.minAzimuthAngle = 0;
            this.controls.maxAzimuthAngle = Math.PI * 1.999;
            this.controls.minPolarAngle = 0;
            this.controls.maxPolarAngle = Math.PI;
            this.cam = true;
        }

        this.camAngle.default = () =>
        {
            this.controls.minDistance = 7;
            this.controls.maxDistance = 16;
            this.controls.minAzimuthAngle = 0 ;
            this.controls.maxAzimuthAngle = Math.PI *1.9999;
            this.controls.minPolarAngle = Math.PI *0.2;
            this.controls.maxPolarAngle = Math.PI * 0.55;
            this.cam = false;
        }
    
    }

    setTransitions() {
        this.transitions = {};
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }


    resize() {
        this.instance.aspect = this.sizes.width / this.sizes.height;
        this.instance.updateProjectionMatrix();
    }

    update() {
        this.controls.update();
    }
}