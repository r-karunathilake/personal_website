import {spline} from 'https://cdn.skypack.dev/@georgedoescode/spline@1.0.1';
import SimplexNoise from 'https://cdn.skypack.dev/simplex-noise@2.4.0';

// SVG path element for the blob 
const paths = document.querySelectorAll('.blob path');
const root = document.documentElement;

let hueNoise = 0;
let noiseOffset = 0.001;

const simplex = new SimplexNoise();
paths.forEach( (path) => {
  const points = createPoints();

  // Map value of one range to another range 
  function map(n, start1, end1, start2, end2) {
    return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
  }

  function noise(x, y){
    return simplex.noise2D(x, y);
  }

  (function animate() {
    path.setAttribute('d', spline(points, 1, true));

    for (let i = 0; i < points.length; i++){
      const point = points[i];

      // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
      const nX = noise(point.noiseX, point.noiseX);
      const nY = noise(point.noiseY, point.noiseY);
      // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
      const x = map(nX, -1, 1, point.ogX - 20, point.ogX + 20);
      const y = map(nY, -1, 1, point.ogY - 20, point.ogY + 20);

      // update the point's current coordinates
      point.x = x;
      point.y = y;

      point.noiseX += noiseOffset;
      point.noiseY += noiseOffset;
    }

    const hueNoiseCal = noise(hueNoise, hueNoise);
    const hue = map(hueNoiseCal, -1, 1, 0, 360);

    root.style.setProperty("--startColor", `hsl(${hue + 60}, 100%, 75%)`);
    root.style.setProperty("--stopColor", `hsl(${hue + 180}, 100%, 75%)`);

    hueNoise += noiseOffset / 6;
    requestAnimationFrame(animate);
  })();
});

function createPoints(){
  const points = [];
  const numPoints = 8;
  // Equally spaced points around the circle 
  const angleOffset = (Math.PI * 2) / numPoints;
  const radius = 80;

  for (let i = 1; i <= numPoints; i++){
    // Calculate x and y coordinates 
    const theta = i * angleOffset; // Convert radians to degrees
    const x = 100 + Math.cos(theta) * radius;
    const y = 100 + Math.sin(theta) * radius;

    // Store the points for later use 
    points.push({
      x: x,
      y: y,
      // Keep reference to this original coordinate when animating new shapes
      ogX: x,
      ogY: y,

      noiseX: Math.random() * 1000,
      noiseY: Math.random() * 1000,
    });
  }

  return points;
}
