import * as THREE from 'three';
import App from '../App.js';
import planet from '../../../static/textures/planet/earth.gif';

export default class Planet {

    constructor() {
       this.app = new App();
       this.renderer = this.app.renderer;
       this.scene = this.app.scene;
       this.camera = this.app.camera;
       this.resources = this.app.resources;

        var geometry = new THREE.PlaneGeometry(10, 10*.75);
        var material = this.resources.items.earthImage;

        var mesh = new THREE.Mesh(geometry, material);
        mesh.position.set(0,0,0);

        this.scene.add(mesh);

        var light = new THREE.PointLight( 0xffffff, 1, 0 );
        light.position.set(1, 1, 100 );
        this.scene.add(light);
    }

    update() {
        //this.renderer.render(this.scene, this.camera);
    }
}