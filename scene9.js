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

  // Griggs: 330, 48
  let griggs_distance = Math.sqrt( (x-330)**2 + (y-48)**2 );
  console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 75) {
     const griggsReport = `
AUTOPSY OF THE CASE:

-Companies were hacked
-Money was stolen
-Crypto was messed up

    `;
    alert(griggsReport);
  }
});

// firewall hint

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
   // Griggs:  239, 126
  let griggs_distance = Math.sqrt( (x-239)**2 + (y-126)**2 );
 console.log("Griggs distance: " + griggs_distance);
 if (griggs_distance < 80) {
     const griggsReport = `
FIREWALL:
william Dej left his job without notice
    `;
    alert(griggsReport);
  }
});

// file cabinet

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

  // Griggs: fix 230,170
  let griggs_distance = Math.sqrt( (x-230)**2 + (y-170)**2 );
  console.log("Griggs distance: " + griggs_distance);
  if (griggs_distance < 80) {
     const griggsReport = `
FILES:"print("His name is William Dej.")" or was it???

    `;
    alert(griggsReport);
  }
});


