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
            this.debugFolder = this.debug.ui.addFolder('Camera');

            this.positionDebugFolder = this.debugFolder.addFolder('cameraPosition');
            this.positionDebugFolder.add(this.instance.position, 'x', -10000, 10000, 0);
            this.positionDebugFolder.add(this.instance.position, 'y', -10000, 10000, 0);
            this.positionDebugFolder.add(this.instance.position, 'z', -10000, 10000, 0);
            this.positionDebugFolder.close()
            
            this.targetDebugFolder = this.debugFolder.addFolder('cameraTarget');
            this.targetDebugFolder.add(this.controls.target, 'x', -10000, 10000, 0);
            this.targetDebugFolder.add(this.controls.target, 'y', -10000, 10000, 0);
            this.targetDebugFolder.add(this.controls.target, 'z', -10000, 10000, 0);
            this.targetDebugFolder.close()
            
            this.camToggle = {cameraRotation:false};
            this.debugFolder
            .add(this.camToggle, 'cameraRotation')
            .onChange(() =>
            {
                this.controls.autoRotate = this.camToggle.cameraRotation;
            });

            this.camUnlocked = {cameraUnlocked:true};
            this.debugFolder
            .add(this.camUnlocked, 'cameraUnlocked')
            .onChange(() =>
            {
                this.controls.maxPolarAngle = Math.PI;
            });
        }
    }

    setInstance() {
        this.instance = new THREE.PerspectiveCamera(75, 2, 1.5, 5);
        //this.instance.position.set(1200, 800, 350);
        //this.instance.lookAt(0, 0, 0);
        this.instance.position.z = 2;
        this.scene.add(this.instance);
    }

    setControls() {
        this.controls = new OrbitControls(this.instance, this.canvas);
        this.controls.enableDamping = true;
        this.controls.dampingFactor = 0.05;
        this.controls.target.z = -1;
        this.controls.maxPolarAngle = Math.PI / 2;
        this.controls.autoRotateSpeed = 3;
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
        //this.controls.update();
    }
}