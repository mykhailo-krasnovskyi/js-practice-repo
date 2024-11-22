export class Shape {
    color;

    constructor(color) {
        this.color = color;
    }

    set color(color) {
        this.color = color;
    }
    get color() {
        return `Color is ${this.color}`;
    }

    area() {
        throw new Error('Method area() should be implemented');
    }

}