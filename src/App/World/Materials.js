import * as THREE from 'three';
import App from "../App"

export default class Materials {

    constructor() {
        this.app = new App();
        this.debug = this.app.debug;
        this.scene = this.app.scene;
        this.resources = this.app.resources;
        this.preLoader = this.app.preLoader;
        this.config = this.app.config;

        this.mapColors();

        // Wait for textures
        this.resources.on('ready', () =>
        {
            this.mapTextures()
        })
    }

    // Define default colors
    mapColors() {
        this.pinkColor = new THREE.Color('#DEA9BE');
    }

    mapTextures() {
        this.planetImage = this.resources.items.earthImage;
        this.smallStar = this.resources.items.smallStar;
        this.bigStar = this.resources.items.bigStar;

        this.resources.trigger('texturesMapped')
    }
}