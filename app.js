const rating_card = document.querySelector(".rating_card");
const thank_you_card = document.querySelector(".thank_you_card");

let rating_container = document.querySelector(".ratings");
let ratings = document.querySelectorAll(".rating");
let button = document.querySelector(".button");
let rating;

rating_container.addEventListener("click", (e) => {
    rating = e.target.dataset.rating;
    console.log(rating);

    resetRating();
    ratings[rating - 1].classList.add("rating-selected");
});

function resetRating() {
    ratings.forEach((rating) => {
        rating.classList.remove("rating-selected");
    });
}

button.addEventListener("click", (e) => {
    if (rating !== undefined) {
        rating_card.classList.add("hidden");
        thank_you_card.classList.remove("hidden");
    }

    const result = document.querySelector(".result");
    result.textContent = `You selected ${rating} out of 5`;
});
