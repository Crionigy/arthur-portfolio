import * as THREE from 'three';
import App from './App';
import Stats from 'stats.js'

export default class Performance {

    constructor() {
        this.app = new App();
        this.debug = this.app.debug;

        // Debug
        if(this.debug.active) {
            this.stats = new Stats();
            this.stats.showPanel(0);
            document.body.appendChild(this.stats.dom);
        }

        // Setup 
        this.filterStrength = 5;
        this.frameTime = 0;
        this.lastLoop = new Date;
        this.intervalSet = null;

        this.windowOpen = true;
        this.setWindowVisibility();
    }

    setWindowVisibility() {
        document.addEventListener('visibilitychange', () => {
            if(document.hidden) {
                this.windowOpen = false;
            } else {
                this.windowOpen = true;
            }
        })
    }

    performanceCheck() {
        // Perform checks every 10 seconds
        if(this.intervalSet === null) {
            setInterval(() => {
                this.performanceCheck()
            }, 10000);
            this.intervalSet = true;
        }

        // Check Performance
        this.frameRate = 1000/this.frameTime;
        console.log(this.frameRate);

        //Put conditions here to increase FPS
    }

    update() {
        this.thisFrameTime = (this.thisLoop = new Date) - this.lastLoop;
        this.frameTime += (this.thisFrameTime - this.frameTime) / this.filterStrength;
        this.lastLoop = this.thisLoop;

        if(this.debug.active) {
            this.stats.begin();
            this.stats.end();
        }
    }
}