import * as THREE from 'three'
import App from '../App.js'

export default class Environment
{
    constructor()
    {
        this.app = new App()
        this.scene = this.app.scene
        this.resources = this.app.resources
        this.debug = this.app.debug
        
        // Debug
        if(this.debug.active)
        {
            this.debugFolder = this.debug.ui.addFolder('environment')
        }

    }
}