const c = document.getElementById("canvas");
const off = 8;
const w = c.width =24;
const h = c.height = 24;
const colors = [[255,0,0], [0,0,255]];
const getR = () => colors[Math.round((Math.random()))];
const toRGBA = (rgba) => `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, 1)`;
const ctx = c.getContext("2d");
let points = [];

ctx.fillStyle = toRGBA(getR())
ctx.fillRect(
    off,
    off,
    w - (off * 2),
    h - (off * 2)
);

for (let i = 0; i < w; i++) {
    let row = []
    for (let y = 0; y < h; y++) {
        let color = getR();
        if(i > 0 && points[i - 1][y]) {
            const side = points[i - 1][y];
            const n = [
                (side[0] * (0.5)) + (color[0] * 0.5),
                (side[1] * (0.5)) + (color[1] * 0.5),
                (side[2] * (0.5)) + (color[2] * 0.5),
                ];
            ctx.fillStyle = toRGBA(n);

        } else {
            ctx.fillStyle = toRGBA(color);
        }
        ctx.fillRect(i,y,1,1);
        row.push(color);
    }
    points.push(row);
    console.log(row);
    console.log(" -- ")
}

console.log(points)
