import * as THREE from 'three';
import App from '../App.js'
import Ground from './Ground.js';
import Planet from './Planet.js'
import Voxel from './Voxel.js';
import Space from './Space.js';

export default class Environment {
    constructor() {
        this.app = new App();
        this.scene = this.app.scene;
        this.resources = this.app.resources;

        const color = 0xffffff, intensity = 1;
        const light = new THREE.DirectionalLight(color, intensity);
        light.position.set(-1, 2, 4);
        this.scene.add(light);

        this.resources.on('ready', () => {
            
        });

        this.resources.on('texturesMapped', () => {
            //this.planet = new Planet();
            this.ground = new Ground();
            this.voxel = new Voxel();
            this.space = new Space();
        });
    }

    update() {
        if(this.ground) {this.ground.update()}
        //if(this.planet) {this.planet.update()}
    }
}