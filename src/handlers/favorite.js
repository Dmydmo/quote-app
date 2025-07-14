import { currentQuote } from "../../index.js";

const favoritesContainer = document.getElementById("favorites-container");
const favoriteBtn = document.getElementById("favorite-btn");
favoriteBtn.addEventListener("click", () => toggleFavorite(currentQuote));

hideBtn(favoriteBtn);

function toggleFavorite(quote) {
  quote.isFavorite = !quote.isFavorite;
  const { text, author, isFavorite } = quote;
  togglFavoriteBtnIcon(isFavorite, favoriteBtn);

  if (isFavorite) {
    showFavoriteCard(text, author, favoritesContainer);
  } else {
    hideFavoriteCard(currentQuote.text);
  }
}

function handlFavorite(isFavorite) {
  showBtn(favoriteBtn);
  togglFavoriteBtnIcon(isFavorite, favoriteBtn);
}

function togglFavoriteBtnIcon(isFavorite, el) {
  el.classList.toggle("fa", isFavorite);
  el.classList.toggle("far", !isFavorite);
}

function showBtn(btn) {
  btn.style.display = "inline-block";
}

function hideBtn(btn) {
  btn.style.display = "none";
}

function showFavoriteCard(quote, author, favoritesContainer) {
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.innerHTML = `
        <p>${quote}</p>
        <p class="author">${author}</p>
      `;
  favoritesContainer.appendChild(favoriteCard);
}

function hideFavoriteCard(quote) {
  const favoriteCards = document.querySelectorAll(".favorite-card");

  favoriteCards.forEach((card) => {
    if (card.textContent.includes(quote)) {
      card.remove();
    }
  });
}

export {
  togglFavoriteBtnIcon as toggleFavoritIcon,
  showFavoriteCard,
  hideFavoriteCard,
  showBtn,
  handlFavorite,
};
