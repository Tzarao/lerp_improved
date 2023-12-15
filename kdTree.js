const c = document.getElementById("canvas");
const w = c.width = 72;
const h = c.height= 72;
const colors = [[0,248,24], [0,0,224]];
const getR = () => colors[Math.round((Math.random()))];
const toRGBA = (rgba) => `rgba(${rgba[0]}, ${rgba[1]}, ${rgba[2]}, 1)`;
const ctx = c.getContext("2d");
const points = [];

for (let i = 0; i < w; i++) {
    const row = []

    for (let y = 0; y < h; y++) {
        const lerpFactor = 1 / 2;
        let color = getR();

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
}

console.log(points)
