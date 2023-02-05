import * as THREE from "three";
import Experience from "/assets/experience/experience.js";

import Room from "./room.js";
import Environment from "./environment.js";

export default class World {
    constructor() {
        this.experience = new Experience();
        this.sizes = this.experience.sizes;
        this.scene = this.experience.scene;
        this.canvas = this.experience.canvas;
        this.camera = this.experience.camera;
        this.resources = this.experience.resources;

        this.resources.on("complete", () => {
            this.environment = new Environment();
            this.room = new Room();
            console.log("created room");
        });
    }

    resize() {
    }

    update() {

    }
}