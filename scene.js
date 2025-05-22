
// JS
const image = document.getElementById('myImage');

image.addEventListener('click', (event) => {
  let x = event.offsetX;
  let y = event.offsetY;

  // Handle scaling
  const naturalWidth = image.naturalWidth;
  const naturalHeight = image.naturalHeight;
  const displayedWidth = image.width;
  const displayedHeight = image.height;

  if (naturalWidth !== displayedWidth || naturalHeight !== displayedHeight) {
    const scaleX = naturalWidth / displayedWidth;
    const scaleY = naturalHeight / displayedHeight;
    x *= scaleX;
    y *= scaleY;
  }
 console.log(`Clicked at pixel: x=${x}, y=${y}`);

  // Griggs: 168, 766
  let griggs_distance = Math.sqrt( (x-168)**2 + (y-766)**2 );
  console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 200) {
     const griggsReport = `
WALTER GRIGGS PROFILE REPORT:

- Age: 57 Years old
- Source of income: Unknown
- Griggs house is located 2 miles from train station
- House security camera stops working (1:03 AM)
- Victim seen at casino from 8–11 PM
- Credit card missing from victim's wallet
    `;
    alert(griggsReport);
  }
});

