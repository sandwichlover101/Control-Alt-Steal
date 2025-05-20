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

  // Griggs: 254, 335
  let griggs_distance = Math.sqrt( (x-254)**2 + (y-335)**2 );
  console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 75) {
     const griggsReport = `
CONTENTS OF CRATE REPORT:

-Small scraps of paper
-One 15 by 15 inches block of wood
-A 20 by 20 inch piece of plastic
-A finger
    `;
    alert(griggsReport);
  }
});
// Shift log or clipboard val and java

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

  // Griggs: fix  424, 430
  let griggs_distance = Math.sqrt( (x-424)**2 + (y-430)**2 );
  console.log("Griggs distance: " + griggs_distance);
 if (griggs_distance < 80) {
     const griggsReport = `
SHIFT LOG  REPORT:

-Sunday 4pm to 6pm Valentino Carolino at casino bar
-Sunday 7am to 7pm Cameron Carter at DoorDash
-Sunday 12am to 7am Bently Hudson
-Yesterday 2pm to 4pm Cameron Carter at DoorDash
-Yesterday 7pm to 2am Valentino Carolino at casino bar
-Yesterday 5pm to 8pm Java Skripte at train station
-Buildings closed Bank, Warehouse and School
    `;
    alert(griggsReport);
  }
});

