import { quoteFavoriteBtn, removeFavoriteQuote } from "../../index.js";

function toggleFavoriteCard(quote, container) {
  quote.isFavorite
    ? showFavoriteCard(quote, container)
    : removeFevoriteCard(quote.id);
}

function showFavoriteBtn(isFavorite) {
  const btn = quoteFavoriteBtn;
  if (btn.style.display === "none")
    quoteFavoriteBtn.style.display = "inline-block";
  btn.classList.toggle("fa", isFavorite);
  btn.classList.toggle("far", !isFavorite);
}

function hideFavoriteBtn() {
  quoteFavoriteBtn.style.display = "none";
}

function showFavoriteCard(quote, container) {
  const { id, text, author } = quote;
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.dataset.favoriteQuoteId = id;
  favoriteCard.innerHTML = `
       <div class="favorite-card-content" >
        <p>${text}</p>
        <p class="author">${author}</p>
        </div>
        <button class="btn btn-danger">Remove from favorite <i class="far fa-trash-alt"></i></button>
      `;
  container.appendChild(favoriteCard);
  const remuveButton = favoriteCard.querySelector(".btn-danger");
  remuveButton.addEventListener("click", () => removeFavoriteQuote(id));
}

function removeFevoriteCard(id) {
  const card = document.querySelector(`[data-favorite-quote-id="${id}"]`);
  if (card) card.remove();
}

export {
  toggleFavoriteCard,
  hideFavoriteBtn,
  showFavoriteCard,
  showFavoriteBtn,
  removeFevoriteCard,
};
