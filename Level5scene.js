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
 console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 80) {
     const griggsReport = `
GARRY YOO PHONE:

-Christine the Chef said(11:09pm yesterday) New french restuarant on myrtle was excellet food tasted just like
when I was training to be a chef a france.
-At 1pm monday Do not go to the restaraunt near the casino the mean server Valentino Carolino messed up my order
and gave me cold oysters.
- 4pm Tuesday Go to the Fisherman's Hook run by Stumble Door he fries up his morning fish, oysters or clams
and serves them on a bread role, cold slauw and includes his famous fishermans sauce
-7am Wednesday Library Cafe near Dons mansion serves the best breakfast plate, only 6 dollars, and you get eggs
(your choice how they are cooked), protein and a delisous morning salad (fruit salad) or smoothie.
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

  // Griggs: fix 354,259
  let griggs_distance = Math.sqrt( (x-354)**2 + (y-259)**2 );
  console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 80) {
     const griggsReport = `
SHIFT LOG  REPORT:

-Monday 4pm to 6pm Valentino Carolino at casino bar
-Tuesday 7am to 7pm Cameron Carter at DoorDash
-Yesterday 2pm to 4pm Cameron Carter at DoorDash
-Yesterday 7pm to 2am Valentino Carolino at casino bar
-Yesterday 5pm to 8pm Java Skripte at train station
    `;
    alert(griggsReport);
  }
});

// Map for cameron and mansion gird 529,337 distance 80
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

  // Griggs: 529,337
  let griggs_distance = Math.sqrt( (x-529)**2 + (y-337)**2 );
  console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 80) {
     const griggsReport = `
Garry Yoo briefase contents:

-simple black pen
-Laptop that has information about Mr Yoos work at the bank
-Notepad
-Keys
-Blueprints about a future business about finance, project, developers and goals
    `;
    alert(griggsReport);
  }
});
// Briefcase or box for blueprints of business
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

  // Griggs: 553,231
  let griggs_distance = Math.sqrt( (x-553)**2 + (y-231)**2 );
  console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 80) {
     const griggsReport = `
CAMERAS REPORT:

-Cameron Carter camera on Myrtle St yesterday at 8pm parted ways with Christine
-Valentino Carolino left camera of casino entrance serving drinks at 11:05pm yesterday
-Cameron Carter right camera from Dons mansion yesterday at 8:10pm went to sleep in his car
-Cameron Carter right camera from Dons mansion today at 7am got out of his car and drove towards Broken Yolk
Breakfast Place
    `;
    alert(griggsReport);
  }
});


