import { quoteFavoriteBtn } from "../../index.js";

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite;
  togglFavoriteBtnIcon(quote.isFavorite, btn);

  if (quote.isFavorite) {
    showFavoriteCard(quote, container);
  } else {
    removeFevoriteCard(quote.id);
  }
}

function handlFavorite(isFavorite) {
  showFavoriteBtn(quoteFavoriteBtn);
  togglFavoriteBtnIcon(isFavorite);
}

function togglFavoriteBtnIcon(isFavorite) {
  quoteFavoriteBtn.classList.toggle("fa", isFavorite);
  quoteFavoriteBtn.classList.toggle("far", !isFavorite);
}

function showFavoriteBtn() {
  quoteFavoriteBtn.style.display = "inline-block";
}

function hideFavoriteBtn() {
  quoteFavoriteBtn.style.display = "none";
}

function removeFavoriteQuote(quote) {
  quote.isFavorite = false;
  removeFevoriteCard(quote.id);
  const currentQuote = document.querySelector("[data-current-quote-id]");

  const currentQuoteId = currentQuote.dataset.currentQuoteId;
  if (quote.id === currentQuoteId) {
    togglFavoriteBtnIcon(quote.isFavorite);
  }
}

function showFavoriteCard(quote, favoritesContainer) {
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
  favoritesContainer.appendChild(favoriteCard);

  const remuveButton = favoriteCard.querySelector(".btn-danger");
  remuveButton.addEventListener("click", () => removeFavoriteQuote(quote));
}

function removeFevoriteCard(id) {
  const card = document.querySelector(`[data-favorite-quote-id="${id}"]`);
  if (card) {
    card.remove();
  }
}

export { handlFavorite, toggleFavorite, hideFavoriteBtn };
