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

- Age: 17 Years old
- Body was found in the school parking lot(time of death 2:43pm)
- 7 wounds wound the whole body
- blood was gushig out of his chest and legs
    `;
    alert(griggsReport);
  }
});

// Book

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
  console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 80) {
     const griggsReport = `
STUDENTS BOOKS:

-this book belongs to the master sworder
-afternoon plan: I could skip work just meet me by the school trah cans near the parking lot
-This kid has to go, no one in the harbor likes him and he killed of all the fish
    `;
    alert(griggsReport);
  }
});

// train station

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

  // Griggs: fix 354,259
  let griggs_distance = Math.sqrt( (x-354)**2 + (y-259)**2 );
  console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 80) {
     const griggsReport = `
CLOCK-IN FOR SHIFT:

-Olivia Carter: 2:03
-Mason Delgado: 2:08
-Harper Lin: 2:13
-Elijah Brooks: 2:14
-Stuble door: 2:21
-Java script: xx
-Jackson Reid 2:25
-Devyn Daher: 2:27
    `;
    alert(griggsReport);
  }
});



  
