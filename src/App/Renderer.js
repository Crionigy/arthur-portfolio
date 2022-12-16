import * as THREE from 'three';
import App from './App.js';

export default class Renderer {

    constructor() {
        this.app = new App();
        this.canvas = this.app.canvas;
        this.sizes = this.app.sizes;
        this.scene = this.app.scene;
        this.camera = this.app.camera;

        this.setInstance();
    }

    setInstance() {
        this.instance = new THREE.WebGLRenderer({
            canvas: this.canvas,
            powerPreference: 'high-performance',
        });

        this.instance.setSize(this.sizes.width, this.sizes.height);
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
        this.instance.outputEncoding = THREE.sRGBEncoding;
    }

    resize() {
        this.instance.setSize(this.sizes.width, this.sizes.height);
        this.instance.setPixelRatio(Math.min(this.sizes.pixelRatio, 2));
    }
}