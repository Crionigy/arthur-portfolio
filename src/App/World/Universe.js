import App from "../App";
import Planet from "./Planet";

export default class Universe {

    constructor() {
        this.app = new App();
        this.scene = this.app.scene;
        this.resources = this.app.resources;

        this.resources.on('ready', () => {
            //this.planet = new Planet();
        });

        this.resources.on('texturesMapped', () => {
            this.scene.background = this.app.materials.pinkColor;
            this.planet = new Planet();
        });
    }

    update() {
        if(this.planet) {this.planet.update()}
    }
}