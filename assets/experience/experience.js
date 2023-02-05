import * as THREE from "three";

import Sizes from "./utils/sizes.js";
import Time from "./utils/time.js";
import Resources from "./utils/resources.js";
import assets from "./utils/assets.js";

import Camera from "./camera.js";
import Renderer from "./renderer.js";

import World from "./world/world.js";

export default class Experience {
    static instance;
    constructor(canvas) {
        if(Experience.instance) {
            return Experience.instance;
        }
        Experience.instance = this;
        this.canvas = canvas;
        this.scene = new THREE.Scene();
        this.sizes = new Sizes();
        this.time = new Time();
        this.camera = new Camera();
        this.renderer = new Renderer();
        this.resources = new Resources(assets);
        this.world = new World();

        this.time.on('update',() => {
           this.update();
        });
        this.sizes.on('resize',() => {
            this.resize();
        });
    }
    resize() {
        this.camera.resize();
        this.renderer.resize();
    }
    update() {
        this.camera.update();
        this.renderer.update();
    }

}