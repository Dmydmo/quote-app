import quotes from "./src/date/quotes.js";
import {
  toggleFavorite,
  hideFavoriteBtn,
  showFavoriteCard,
} from "./src/handlers/favorite.js";
import {
  hendelQuote,
  displayQuote,
  findQuoteId,
} from "./src/handlers/quote.js";
import {
  localStorageSetItem,
  localStorageGetItem,
} from "./src/utils/localStorage.js";

const CURRENT_QUOTE_KEY = "currentQuote";
const FAVORITE_QUOTE_KEY = "favoriteQuotes";

let currentQuote = null;
let favoriteQuotes = [];

function setCurrantQuote(quote, shoutToggleFavorite = false) {
  if (shoutToggleFavorite) {
    quote.isFavorite = !quote.isFavorite;
    if (quote.isFavorite) {
      favoriteQuotes.push({ ...quote });
    } else {
      const index = favoriteQuotes.findIndex(
        (favoriteQuote) => favoriteQuote.id === quote.id
      );
      if (index !== -1) {
        favoriteQuotes.splice(index, 1);
      }
    }
    localStorageSetItem(FAVORITE_QUOTE_KEY, favoriteQuotes);
  }

  currentQuote = quote;
  localStorageSetItem("CURRENT_QUOTE_KEY", currentQuote);
}

const favoritesContainer = document.getElementById("favorites-container");
const quoteFavoriteBtn = document.getElementById("quote-favorite-btn");
hideFavoriteBtn(quoteFavoriteBtn);
quoteFavoriteBtn.addEventListener("click", () =>
  toggleFavorite(
    currentQuote,
    setCurrantQuote,
    quoteFavoriteBtn,
    favoritesContainer
  )
);

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", () =>
  hendelQuote(quotes, favoriteQuotes, setCurrantQuote)
);

function init() {
  const currantQuoteFromStorage = localStorageGetItem(CURRENT_QUOTE_KEY);
  if (currantQuoteFromStorage) {
    displayQuote(currantQuoteFromStorage);
    const quote = findQuoteId(quotes, currantQuoteFromStorage.id);
    quote.isFavorite = currantQuoteFromStorage.isFavorite;
    currentQuote = quote;
  }
  const favoriteQuotesFromStorage = localStorageGetItem(FAVORITE_QUOTE_KEY);
  if (favoriteQuotesFromStorage) {
    favoriteQuotesFromStorage.forEach((quote) => {
      favoriteQuotes.push(quote);
      showFavoriteCard(quote, setCurrantQuote, favoritesContainer);
    });
  }
}
window.addEventListener("load", init);

export { quoteFavoriteBtn };
