import { Shape } from "./shape.js";
export class Circle extends Shape {

    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }

    area() {
        return Math.PI * this.radius ** 2;
    }

}