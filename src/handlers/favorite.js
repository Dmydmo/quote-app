import { favoriteBtn } from "../../index.js";

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite;
  const { text, author, isFavorite } = quote;
  togglFavoriteBtnIcon(isFavorite, btn);

  if (isFavorite) {
    showFavoriteCard(text, author, container);
  } else {
    hideFavoriteCard(text);
  }
}

function handlFavorite(isFavorite) {
  showFavoriteBtn(favoriteBtn);
  togglFavoriteBtnIcon(isFavorite, favoriteBtn);
}

function togglFavoriteBtnIcon(isFavorite, el) {
  el.classList.toggle("fa", isFavorite);
  el.classList.toggle("far", !isFavorite);
}

function showFavoriteBtn(btn) {
  btn.style.display = "inline-block";
}

function hideFavoriteBtn(btn) {
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

export { handlFavorite, toggleFavorite, hideFavoriteBtn };
