import { currentQuote } from "../../index.js";

const favoritesContainer = document.getElementById("favorites-container");
const toggleBtn = document.getElementById("toggle-favorite-btn");
toggleBtn.addEventListener("click", toggleFavorite);

hideBtn(toggleBtn);

function toggleFavorite() {
  currentQuote.isFavorite = !currentQuote.isFavorite;
  toggleFavoritIcon(currentQuote.isFavorite, toggleBtn);

  if (currentQuote.isFavorite) {
    showFavoriteCard(
      currentQuote.text,
      currentQuote.author,
      favoritesContainer
    );
  } else {
    hideFavoriteCard(currentQuote.text);
  }
}

function handlFavorite(isFavorite) {
  showBtn(toggleBtn);
  toggleFavoritIcon(isFavorite, toggleBtn);
}

function toggleFavoritIcon(isFavorite, el) {
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
  toggleFavoritIcon,
  showFavoriteCard,
  hideFavoriteCard,
  showBtn,
  handlFavorite,
};
