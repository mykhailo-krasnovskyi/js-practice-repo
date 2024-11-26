import { Shape } from "./shape.js";
export class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }

    area() {
        return this.width * this.height;
    }

}