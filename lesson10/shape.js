export class Shape {

    constructor(color) {
        this.color = color;
    }

    set color(color) {
        if (typeof color !== 'string') {
            console.log('wrong color');
            this._color = 'red';
        } else {
            this._color = color;
        }

    }
    get color() {
        return `Color is ${this._color}`;
    }

    area() {
        throw new Error('Method area() should be implemented');
    }

}