import * as THREE from 'three';
import App from '../App.js';
import EventEmitter from './EventEmitter.js';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { BasisTextureLoader } from 'three/examples/jsm/loaders/BasisTextureLoader';


export default class Resources extends EventEmitter {

    constructor(sources) {
        super();

        this.app = new App();
        this.sources = sources;
        this.renderer = app.renderer.instance;

        this.items = {}
        this.toLoad = this.sources.length
        this.loaded = 0

        this.setLoaders();
        this.startLoading();
    }

    setLoaders() {
        this.loaders = {};
        this.loaders.dracoLoader = new DRACOLoader;
        this.loaders.dracoLoader.setDecoderPath('/draco/');
        this.loaders.gltfLoader = new GLTFLoader();
        this.loaders.gltfLoader.setDRACOLoader(this.loaders.dracoLoader);
        this.loaders.textureLoader = new THREE.TextureLoader();
        this.loaders.cubeTextureLoader = new THREE.CubeTextureLoader();
        this.loaders.basisTextureLoader = new BasisTextureLoader();
        this.loaders.basisTextureLoader.setTranscoderPath('/basis/');
        this.loaders.basisTextureLoader.detectSupport(this.renderer);
    }

    startLoading() {
        // Load each source
        for(const source of this.sources) {
            if(source.type === 'gltfModel') {
                this.loaders.gltfLoader.load(
                    source.path,
                    (file) => {
                        this.sourceLoaded(source, file);
                    }
                )
            } else if(source.type === 'texture') {
                this.loaders.textureLoader.load(
                    source.path,
                    (file) => {
                        file.flipY = false
                        file.encoding = THREE.sRGBEncoding
                        this.sourceLoaded(source, file)
                    }
                )
            } else if(source.type === 'basisTexture') {
                this.loaders.basisTextureLoader.load(
                    source.path,
                    (file) => {
                        file.encoding = THREE.sRGBEncoding
                        this.sourceLoaded(source, file)
                    }
                )
            }
        }
    }

    sourceLoaded(source, file) {
        this.trigger('itemLoaded');

        this.items[source.name] = file;
        this.loaded++;

        if(this.loaded === this.toLoad) {
            this.trigger('ready');
        }
    }
}