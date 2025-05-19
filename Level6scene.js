const image = document.getElementById('myImage');

//Stomach wounds autopsy
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
 console.log('Clicked at pixel: x=${x}, y=${y}');

  // Griggs: 847, 515
//fix only works on hand
  let griggs_distance = Math.sqrt( (x-650)**2 + (y-500)**2 );
  console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 200) {
     const griggsReport = `
AUTOPSY OF MR DON:

- Age: 45 Years old
-Several stab wounds to the stomach
-Bruising on left and right arm
-Toxic poison in lungs
-Scraped several time with something sharp, not a knife
-Cause of death poison
-Dirt and blood all over him
-Time of death 7:04pm
    `;
    alert(griggsReport);
  }
});
// Secirty camera
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

  // Griggs: 910,73
  let griggs_distance = Math.sqrt( (x-910)**2 + (y-73)**2 );
  console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 75) {
     const griggsReport = `
SECURITY CAMERA REPORT:

-Tuesday at 2pm Dons mansion Stumble Door at the mansion
-Tuesday at 2:30pm Dons mansion Bently Hudson at the mansion
-Tuesday at 3:47pm Dons mansion Java Skripte at the mansion
-Tuesday at 6pm to 7:45pm error no footage available
-Tuesday at 5pm to 9pm Cadets Catch by the harbo Gilfard Glif and Christine Crow eating fish, note in
background a man (around 6 feet tall with brown eyes and red hair) eating fish with another person from 6pm to 9pm
    `;
    alert(griggsReport);
  }
});

//Laptop
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
  let griggs_distance = Math.sqrt( (x-236)**2 + (y-584)**2 );
 console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 100) {
     const griggsReport = `
LAPTOP ACTIVITY SECURITY:

-Shawn Cinna at the harbor at 7:05pm working on google doc called lesson plan for grade 4a topic long division
-Unkown usar at unkown location from 5pm to 8pm firewall of Dons security hacked into
-Caddy Marie at local fish restaurant at 9pm working on a spreadsheet called college application
-Brad Pity near casino at 6pm working on a google doc called company imprvoemnet ideas
    `;
    alert(griggsReport);
  }
});
//Flyer
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

  // Griggs: fix 1284,509
  let griggs_distance = Math.sqrt( (x-1284)**2 + (y-509)**2 );
  console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 80) {
     const griggsReport = `
LEYTON COUNTY BOOK FAIR:

-This Monday and Tuesday at Leyton County Book Store on mass ave
-Featuring librarians from every county including Lee Beery Shush
-From 8am to 10pm Monday and Tuesday
    `;
    alert(griggsReport);
  }
});

// iphone or shift log
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

  // Griggs: fix 1142,813
  let griggs_distance = Math.sqrt( (x-1142)**2 + (y-813)**2 );
  console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 80) {
     const griggsReport = `
SHIFT LOG  REPORT:

-Valentino Carolino working at the Casino from 5pm to 2am
-Java Skripte working at the Trainstation from 5pm to 8pm
-Rica Costa working at Sallys Shrimpsfrom 7pm to 10pm
-Bella Carol working at Rancotores from 6pm to 12am
    `;
    alert(griggsReport);
  }
});
// wires are hacker button
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

  // Griggs: fix 305,895
  let griggs_distance = Math.sqrt( (x-305)**2 + (y-895)**2 );
  console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 80) {
     const griggsReport = `
ERROS IN TOWNS SYTEM OR HACKER DETECTION  REPORT:

-Monday 7pm Sallys Shrimp UberEats system went down cause system 835 glitch
-Tuesday 5pm Dons Mansion Camera went down for 4 hours cause hacker location near Great Lake
    `;
    alert(griggsReport);
  }
});

