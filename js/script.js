const card = document.querySelector(".card");
const options = document.querySelectorAll(".card__option");
const rating = document.querySelector(".card__selected-value");

options.forEach((option) => {
  option.addEventListener("click", () => {
    options.forEach((option) => {
      if (option.classList.value === "card__option card__option--selected") {
        option.classList.remove("card__option--selected");
        option.classList.add("card__option--default");
      }
    });
    option.classList.remove("card__option--default");
    option.classList.add("card__option--selected");
  });
});

const Submit = () => {
  options.forEach((option, index) => {
    if (option.classList.value === "card__option card__option--selected") {
      rating.textContent = index + 1;
      card.classList.add("flip");
    }
  });
};
