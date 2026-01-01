function convertColour (r,g,b) {
    const color = {};

    color.r = r;
    color.g = g;
    color.b = b;

    color.rgb = function () {
        return `rgb(${this.r}, ${this.g}, ${this.b})`;
    }

    return color;
}

function Color (r,g,b) {
    this.r = r;
    this.g = g;
    this.b = b;
};

Color.prototype.rgb = function () {
    const { r,g,b } = this;
    return `rgb(${r}, ${g}, ${b})`;
};

Color.prototype.hex = function () {
    const { r,g,b } = this;
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

Color.prototype.rgba = function (a = 1.0) {
    const { r,g,b } = this;
    return `rgba(${r}, ${g}, ${b}, ${a})`;
};

console.log(Color(255,0,0));

console.log(new Color(255,0,0).rgb());

const objColor = new Color(255,0,0);

console.log(document.body.style.backgroundColor = new Color(19,200,30).rgba());