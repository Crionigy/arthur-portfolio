import App from '../App.js'
import Stars from './Elements/Stars.js';

export default class Space {
    constructor() {
        this.app = new App();
        this.scene = this.app.scene;
        this.resources = this.app.resources;
        this.materials = this.app.materials;

        this.star = new Stars();
        this.scene.add(this.star.smallStars);
        this.scene.add(this.star.bigStars);
    }

    update() {
        if(this.star) { this.star.update() }
    }
}