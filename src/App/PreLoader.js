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
        this.loading = document.querySelector('#loading');
        this.startButton = document.querySelector('.start');

        // Progress
        this.resources.on('itemLoaded', () => {
            this.progressRatio = (this.resources.loaded + 1) / this.resources.toLoad;

            document.getElementById("progressPercentage").innerHTML = Math.trunc(this.progressRatio * 100);
        });      

        // Loaded
        this.resources.on('ready', () => {
            window.setTimeout(() => {
                this.loading.classList.add('fade');
            }, 1500);

            window.setTimeout(() => {
                this.readyScreen();
            }, 2500);
        });
    }

    readyScreen() {
        this.loading.remove()
        this.startButton.style.display = "inline";
        this.startButton.classList.add('fadeIn');
        this.startButton.addEventListener("click", async () => {
            
            // Remove overlay and button
            this.overlay.classList.add('fade');
            this.startButton.classList.add('fadeOut');

            window.setTimeout(() => {
                this.startButton.remove();
                this.overlay.remove();
            }), 2000;

            // Trigger start events
            this.performance = this.app.performance

            // Wait before performance Check
            await this.sleep(500)
            this.performance.performanceCheck()  

        }, { once: true });
    }

    sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
}