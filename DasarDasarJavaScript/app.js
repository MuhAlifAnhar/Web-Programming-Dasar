const hex = (r, g, b) => {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

const rgb = (r,g,b) => {
    return `rgb(${r}, ${g}, ${b})`;
};

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

const color = convertColour(106,22,90);
console.log(color.rgb());

console.log(convertColour(106,22,90));

console.log(hex(106,22,90));
console.log(rgb(106,22,90));