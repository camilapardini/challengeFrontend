const loader = document.getElementById("loader")
const imgBackground = document.getElementsByClassName("imgBackground")
const leftArrow = document.querySelector('.leftArrow')
const rightArrow = document.querySelector('.rightArrow')
const min_step = 0;
const max_step = 9;

let currentStep = 0;


setTimeout(function () {
   loader.style.display = "none";
   content.style.display = "block";

}, 3000);


function toStep(step) {
   const element = document.querySelector(`#step-${step}`);
   currentStep = step;

   document.querySelectorAll('section').forEach(e => {
      e.classList.add("hidden")
   })

   element.classList.remove("hidden")

   if (step === min_step) {
      leftArrow.classList.add("hidden")
      rightArrow.classList.remove("hidden")
   } else if (step === max_step) {
      leftArrow.classList.remove("hidden")
      rightArrow.classList.add("hidden")
   } else {
      rightArrow.classList.remove("hidden")
      leftArrow.classList.remove("hidden")
   }

   element.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
      inline: 'end'
   })
}

function previous() {
   currentStep--;
   toStep(currentStep);
}

function next() {
   currentStep++;
   toStep(currentStep);
}