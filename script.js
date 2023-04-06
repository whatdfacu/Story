function fadeIn(el) {
  el.style.opacity = 0;

  const scrollHandler = function () {
    if (isScrolledIntoView(el)) {
      el.style.opacity = 1;
      window.removeEventListener("scroll", scrollHandler);
    }
  };

  window.addEventListener("scroll", scrollHandler);
}

function isScrolledIntoView(el) {
  const rect = el.getBoundingClientRect();
  const elemTop = rect.top;
  const elemBottom = rect.bottom;

  // Only completely visible elements return true:
  const isVisible = elemTop >= 0 && elemBottom <= window.innerHeight;
  return isVisible;
}

const mainParagraph = document.getElementById("main-paragraph");
fadeIn(mainParagraph);

const audio = new Audio(
  "./music/Pink Floyd - Shine On You Crazy Diamond 1-5.mp3"
);
const playBtn = document.getElementById("play-btn");
const h1 = document.querySelector("h1");

playBtn.onclick = function () {
  audio.play();
  document.body.classList.add("playing");

  // Scroll smoothly to the h1 element
  const scrollToH1 = () => {
    const h1Top = h1.offsetTop;
    const viewportHeight = window.innerHeight;
    const scrollTarget = h1Top - viewportHeight / 3;
    const scrollStep =
      Math.abs(document.documentElement.scrollTop - scrollTarget) / 100;
    const scrollInterval = setInterval(() => {
      if (document.documentElement.scrollTop < scrollTarget) {
        document.documentElement.scrollTop += scrollStep;
        if (document.documentElement.scrollTop >= scrollTarget) {
          clearInterval(scrollInterval);
        }
      } else {
        document.documentElement.scrollTop -= scrollStep;
        if (document.documentElement.scrollTop <= scrollTarget) {
          clearInterval(scrollInterval);
        }
      }
    }, 25);
  };

  // Wait a short time before scrolling to the h1 element
  setTimeout(scrollToH1, 500);
};

window.addEventListener("scroll", () => {
  const paragraphs = document.querySelectorAll(".paragraph");
  const triggerBottom = window.innerHeight * 0.8;

  paragraphs.forEach((paragraph) => {
    console.log("animation");
    const paragraphTop = paragraph.getBoundingClientRect().top;

    if (paragraphTop < triggerBottom) {
      paragraph.classList.add("animate");
    } else {
      paragraph.classList.remove("animate");
    }
  });
});

const scrollToButton = document.querySelector("#scroll-to-button");

button.addEventListener("click", () => {
  const h1Top = h1.offsetTop;
  const viewportHeight = window.innerHeight;
  const scrollTop = h1Top - viewportHeight / 2;
  document.documentElement.scrollTo({
    top: scrollTop,
    behavior: "smooth",
  });

  setTimeout(() => {
    scrollToButton.style.display = "block";
  }, 3000);
});

scrollToButton.addEventListener("click", () => {
  const primerParrafo = document.querySelector("#primer-párrafo");
  const primerParrafoTop = primerParrafo.offsetTop;
  const viewportHeight = window.innerHeight;
  const scrollTop = primerParrafoTop - viewportHeight / 2;
  document.documentElement.scrollTo({
    top: scrollTop,
    behavior: "smooth",
  });
});

const myParagraph = document.getElementById("myParagraph");
const wordsArray = myParagraph.textContent.split(" ");
let i = 0;

setInterval(function () {
  if (i < wordsArray.length) {
    myParagraph.textContent += wordsArray[i] + " ";
    i++;
  }
}, 100);
