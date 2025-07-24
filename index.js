import {
  hideFavoriteBtn,
  showFavoriteCard,
  toggleFavoriteCard,
  showFavoriteBtn,
  removeFevoriteCard,
} from "./src/handlers/favorite.js";
import { displayCurrentQuote } from "./src/handlers/currentQuote.js";
import {
  localStorageSetItem,
  localStorageGetItem,
} from "./src/utils/localStorage.js";
import { getRandomQuote } from "./src/handlers/randomQuotq.js";
import { ramoveObjectFromArrayById } from "./src/utils/array.js";

const CURRENT_QUOTE_KEY = "currentQuote";
const FAVORITE_QUOTE_KEY = "favoriteQuotes";

const randomQuoteBtn = document.getElementById("random quote-btn");
const favoritesContainer = document.getElementById("favorites-container");
const quoteFavoriteBtn = document.getElementById("quote-favorite-btn");

let currentQuote = null;
let favoriteQuotes = [];

function removeFavoriteQuote(id) {
  if (id === currentQuote.id) {
    toggleCurrentQuote();
  } else {
    ramoveObjectFromArrayById(favoriteQuotes, currentQuote.id);
    removeFevoriteCard(id);

    localStorageSetItem(FAVORITE_QUOTE_KEY, favoriteQuotes);
  }
}

function toggleCurrentQuote() {
  currentQuote.isFavorite = !currentQuote.isFavorite;
  showFavoriteBtn(currentQuote.isFavorite);
  localStorageSetItem("currentQuote", currentQuote);

  if (currentQuote.isFavorite) {
    favoriteQuotes.push({ ...currentQuote });
  } else {
    ramoveObjectFromArrayById(favoriteQuotes, currentQuote.id);
  }

  toggleFavoriteCard(currentQuote, favoritesContainer);

  localStorageSetItem(FAVORITE_QUOTE_KEY, favoriteQuotes);
}

function setCurrantQuote(quote) {
  currentQuote = { ...quote };
  currentQuote.isFavorite = !!favoriteQuotes.find(
    (favoriteQuote) => favoriteQuote.id === currentQuote.id
  );
  displayCurrentQuote(currentQuote);
  showFavoriteBtn(currentQuote.isFavorite);
  localStorageSetItem("currentQuote", currentQuote);
}

hideFavoriteBtn();
quoteFavoriteBtn.addEventListener("click", toggleCurrentQuote);

randomQuoteBtn.addEventListener("click", () =>
  setCurrantQuote(getRandomQuote())
);

function init() {
  const favoriteQuotesFromStorage = localStorageGetItem(FAVORITE_QUOTE_KEY);
  if (favoriteQuotesFromStorage) {
    favoriteQuotesFromStorage.forEach((quote) => {
      favoriteQuotes.push(quote);
      showFavoriteCard(quote, favoritesContainer);
    });
  }
  const currantQuoteFromStorage = localStorageGetItem(CURRENT_QUOTE_KEY);
  if (currantQuoteFromStorage) {
    setCurrantQuote(currantQuoteFromStorage);
  }
}
window.addEventListener("load", init);

export { quoteFavoriteBtn, setCurrantQuote, removeFavoriteQuote };
