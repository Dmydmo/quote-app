import { favoriteBtn, favoritesContainer } from "../../index.js";

const deleteBtn = document.getElementById("deletee-btn");
deleteBtn.addEventListener("click", () => {
  favoritesContainer.innerHTML = "";
});

function toggleFavorite(quote, btn, container) {
  quote.isFavorite = !quote.isFavorite;
  togglFavoriteBtnIcon(quote.isFavorite, btn);

  if (quote.isFavorite) {
    showFavoriteCard(quote, container);
  } else {
    hideFavoriteCard(quote.id);
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

function showFavoriteCard(quote, favoritesContainer) {
  const { id, text, author } = quote;
  const favoriteCard = document.createElement("div");
  favoriteCard.classList.add("favorite-card");
  favoriteCard.dataset.quoteId = id;
  favoriteCard.innerHTML = `
        <p>${text}</p>
        <p class="author">${author}</p>
        <button>Del</button>
      `;

  favoritesContainer.appendChild(favoriteCard);
}

function hideFavoriteCard(id) {
  const card = document.querySelector(`.favorite-card[data-quote-id="${id}"]`);
  if (card) {
    card.remove();
  }
}

export { handlFavorite, toggleFavorite, hideFavoriteBtn };
