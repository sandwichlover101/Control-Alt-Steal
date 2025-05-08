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

  // Griggs: 233, 320
  let griggs_distance = Math.sqrt( (x-233)**2 + (y-320)**2 );
  console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 75) {
     const griggsReport = `
GARRY YOO CASE REPORT:

- Age: 48 Years old
- Body has been at the lake for almost 5 hours (time of death 11:08pm)
- No cuts or stab wounds
- Died due to toxic poison (made at home very simple)
    `;
    alert(griggsReport);
  }
});

// Iphone

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

  // Griggs:  67, 286
  let griggs_distance = Math.sqrt( (x-67)**2 + (y-286)**2 );
//not done
