import quotes from "./src/date/quotes.js";
import { toggleFavorite, hideFavoriteBtn } from "./src/handlers/favorite.js";
import { hendelQuote } from "./src/handlers/quote.js";

let currentQuote = null;

function setCurrantQuote(quote) {
  currentQuote = quote;
}

const favoritesContainer = document.getElementById("favorites-container");
const favoriteBtn = document.getElementById("favorite-btn");
hideFavoriteBtn(favoriteBtn);
favoriteBtn.addEventListener("click", () =>
  toggleFavorite(currentQuote, favoriteBtn, favoritesContainer)
);

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", () =>
  hendelQuote(quotes, setCurrantQuote)
);
export { favoriteBtn };
