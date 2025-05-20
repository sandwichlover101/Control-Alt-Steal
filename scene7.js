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

  // Griggs: 145, 448
  let griggs_distance = Math.sqrt( (x-145)**2 + (y-448)**2 );
  console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 75) {
     const griggsReport = `
AUTOPSY OF MICHAEL:

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
   // Griggs:  37, 470
  let griggs_distance = Math.sqrt( (x-37)**2 + (y-470)**2 );
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

  // Griggs: fix 51,377
  let griggs_distance = Math.sqrt( (x-51)**2 + (y-377)**2 );
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

  // Griggs: 243, 411
  let griggs_distance = Math.sqrt( (x-243)**2 + (y-411)**2 );
  console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 75) {
     const griggsReport = `
BOOK OWNER

the book belongs to Java Skripte
    `;
    alert(griggsReport);
  }
});







  
