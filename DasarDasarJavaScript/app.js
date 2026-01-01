class Color {
    constructor(r,g,b,name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name;
    }

    innerRGB() {
        const { r,g,b } = this;
        return `rgb(${r}, ${g}, ${b})`;
    }

    colorName() {
        console.log('The color is ' + this.name);
    }

    rgb() {
        return `rgb(${this.innerRGB()})`;
    }

    hex() {
        const { r,g,b } = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }

    rgba(a = 1.0) {
        const { r,g,b } = this;
        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
}

const skyColor = new Color(185, 243, 252, 'sky blue');

console.log(skyColor.hex());

console.log(document.body.style.backgroundColor = skyColor.rgb());