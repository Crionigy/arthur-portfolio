import App from './App.js';
import EventEmitter from './Utils/EventEmitter.js';

export default class PreLoader extends EventEmitter {
    
    constructor() {
        super();

        this.app = new App();
        this.scene = this.app.scene;
        this.resources = this.app.resources;
        this.sizes = this.app.sizes;
        this.overlay = document.querySelector('.overlay');
        this.content = document.querySelector('#content'); 

        // Loaded
        this.resources.on('ready', () => {

            window.setTimeout(() => {
                this.readyScreen();
            }, 2500);
        });
    }

    readyScreen() {

        this.overlay.classList.add('fade');
        this.content.classList.remove('fade');
        this.content.classList.add('fadeIn');

        window.setTimeout(() => {
            this.overlay.remove();
        }, 2000);

        this.performance = this.app.performance;
        window.setTimeout(() => {
            this.performance.performanceCheck() 
        }, 500);
         
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}