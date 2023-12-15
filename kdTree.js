const c = document.getElementById("canvas");
const w = c.width = 2;
const h = c.height= 2;
const colors = [[0,255,0], [255,0,0]];
//const getR = () => colors[Math.round((Math.random()))];
const toRGBA = (rgba) => `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, 1)`;
const ctx = c.getContext("2d");
const lerpFactor = 0.55;
const points = [];

for (let i = 0; i < w; i++) {
    const row = []

    for (let y = 0; y < h; y++) {
        let color = colors[i ^ y ? 1 : 0];

        if (i > 0 && points[i - 1][y]) {
            const side = points[i - 1][y];

            const sideblend = [
                (side[0] * (lerpFactor)) + (color[0] * lerpFactor),
                (side[1] * (lerpFactor)) + (color[1] * lerpFactor),
                (side[2] * (lerpFactor)) + (color[2] * lerpFactor),
            ];

            color = sideblend;
        }
        ctx.fillStyle = toRGBA(color);
        ctx.fillRect(i,y,1,1);
        row.push(color);
    }
    points.push(row);
    console.log(row);
    console.log(" -- ")
}

console.log(points)

console.log(points)
