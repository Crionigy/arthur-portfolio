import * as THREE from 'three'
import App from '../App/App.js';

export default class Cubes
{
    constructor() {

      this.app = new App();
      this.scene = this.app.scene;
      this.time = this.app.time;

      this.color = 0xFFFFFF;
      this.intensity = 1;
      this.light = new THREE.DirectionalLight(this.color, this.intensity);
      this.light.position.set(-1, 2, 4);
      this.scene.add(this.light);
        
      this.boxWidth = 1;
      this.boxHeight = 1;
      this.boxDepth = 1;
      this.geometry = new THREE.BoxGeometry(this.boxWidth, this.boxHeight, this.boxDepth);

      this.cubes = [
        this.makeInstance(this.geometry, 0xFF0000,  0, 0),
        this.makeInstance(this.geometry, 0x8844aa, -2, 0),
        this.makeInstance(this.geometry, 0xaa8844,  2, 0),
        this.makeInstance(this.geometry, 0xaa8844,  -2, -2),
        this.makeInstance(this.geometry, 0x8844aa, 2, 2),
        this.makeInstance(this.geometry, 0x44aa88,  2, -2),
        this.makeInstance(this.geometry, 0x44aa88,  -2, 2),
        this.makeInstance(this.geometry, 0xFFCBDB,  0, 2),
        this.makeInstance(this.geometry, 0xFFCBDB,  0, -2),
      ];
    }

    update() {
      let tickTime = this.time.current * 0.001;  // convert time to seconds

      this.cubes.forEach((cube, ndx) => {
        let speed = 1 + ndx * .1;
        let rot = tickTime * speed;
        cube.rotation.x = rot;
        cube.rotation.y = rot;
      });

      //this.app.renderer.instance.render(this.scene, this.app.camera.instance);
    }

    makeInstance(geometry, color, x, y) {
      let material = new THREE.MeshPhongMaterial({color});
                
      let cube = new THREE.Mesh(geometry, material);
      this.scene.add(cube);
                
      cube.position.x = x;
      cube.position.y = y;
                
      return cube;
    }
}