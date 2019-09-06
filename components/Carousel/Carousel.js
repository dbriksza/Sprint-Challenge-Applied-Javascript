/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const entrypoint = document.querySelector(".carousel-container");

const imgArray = [
  "./assets/carousel/mountains.jpeg",
  "./assets/carousel/computer.jpeg",
  "./assets/carousel/trees.jpeg",
  "./assets/carousel/turntable.jpeg"
];

function Carousel(imgs) {
  let x = 0;
  const carousel = document.createElement("div");
  const left = document.createElement("div");
  const right = document.createElement("div");
  const img0 = document.createElement("img");

  img0.style.display = "block";

  left.textContent = "<";
  right.textContent = ">";
  img0.src = imgs[x];

  carousel.appendChild(left);
  carousel.appendChild(img0);
  carousel.appendChild(right);

  carousel.classList.add("carousel");
  left.classList.add("left-button");
  right.classList.add("right-button");

  left.addEventListener("click", e => {
    if (x === 0) {
      x = 3;
      img0.src = imgs[x];
    } else {
      x--;
      img0.src = imgs[x];
    }
    console.log(x);
  });
  right.addEventListener("click", e => {
    if (x === 3) {
      x = 0;
      img0.src = imgs[x];
    } else {
      x++;
      img0.src = imgs[x];
    }
    console.log(x);
  });

  return carousel;
}

entrypoint.appendChild(Carousel(imgArray));
