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

  // Griggs: 172, 143
  let griggs_distance = Math.sqrt( (x-172)**2 + (y-143)**2 );
  console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 75) {
     const griggsReport = `
AUTOPSY OF GILBERT:

- Age: 22 Years old
- Body was found in the apartment(time of death 8:33pm)
- fork marks everywhere
- blood was gushig out of his throat
    `;
    alert(griggsReport);
  }
});

// door number

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
   // Griggs:  281, 13
  let griggs_distance = Math.sqrt( (x-281)**2 + (y-13)**2 );
 console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 20) {
     const griggsReport = `
PEOPLE ON THE APARTMENT FLOOR:
-gilbert
-christine crow
-cameron carter
-elizabeth
    `;
    alert(griggsReport);
  }
});

// pizza order details

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

  // Griggs: fix 198,60
  let griggs_distance = Math.sqrt( (x-198)**2 + (y-60)**2 );
  console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 20) {
     const griggsReport = `
DOOR DASH ORDER:

ordered by: Gilbert
time:7:36
payment method:cash
number of items: 3
order directions: please inclue a lot of napkins
    `;
    alert(griggsReport);
  }
});

// photo image
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

  // Griggs: 118, 54
  let griggs_distance = Math.sqrt( (x-118)**2 + (y-54)**2 );
  console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 25) {
     const griggsReport = `
PHOTO RELATIONSHIP:
the man who was in the coner is really her brother not the muderer. He was indeed a fugitive but he has other relations with Cameron Carter.
    `;
    alert(griggsReport);
  }
});



