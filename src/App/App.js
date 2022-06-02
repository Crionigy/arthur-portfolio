import * as THREE from 'three'

import Debug from './Utils/Debug.js';
import Sizes from './Utils/Sizes.js';
import Time from './Utils/Time.js';
import Camera from './Camera.js';
import Renderer from './Renderer.js';
import Performance from './Performance.js'
import Resources from './Utils/Resources.js';
import PreLoader from './PreLoader.js';
import sources from './sources.js';
import Materials from './World/Materials.js';
import Environment from './World/Environment.js';

let instance = null;

export default class App {

    constructor(_canvas) {

        // Singletoon
        if(instance) {
            return instance;
        }

        instance = this;

        // Global access
        window.app = this;

        // Options
        this.canvas = _canvas;

        // Config
        this.config = {};
        this.config.touch = false;
        window.addEventListener('touchstart', ()=> {
            this.config.touch = true;
        }, { once: true })

        // Setup
        this.debug = new Debug();
        this.scene = new THREE.Scene();
        this.sizes = new Sizes();

        if(this.sizes.width / this.sizes.height > 1) {
            this.config.vertical = false;
        } else {
            this.config.vertical = true;
        }

        this.time = new Time();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.resources = new Resources(sources);
        this.performance = new Performance();
        this.preLoader = new PreLoader();
        this.environment = new Environment();
        this.materials = new Materials();
        
        // Resize event
        this.sizes.on('resize', () => {
            this.resize();
        });

        // Time tick event
        this.time.on('tick', () => {
            this.update();
        });
    }

    resize() {
        this.camera.resize();
        this.renderer.resize();
    }

    update() {
        this.camera.update();
        this.environment.update();
        this.performance.update();

        this.renderer.instance.render(this.scene, this.camera.instance);
    }
}