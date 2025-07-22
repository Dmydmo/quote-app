import { handlFavorite } from "./favorite.js";
import { ganerateRandomIndex } from "../utils/math.js";

function hendelQuote(quotes, favoriteQuotes, setCurrantQuote) {
  const randomQuote = chooseRandomQuote(quotes);
  if (favoriteQuotes.find((quote) => quote.id === randomQuote.id)) {
    randomQuote.isFavorite = true;
  }

  setCurrantQuote(randomQuote);
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const { id, text, author, isFavorite } = quote;
  const quoteElement = document.getElementById("quote");
  const quoteTextElement = document.getElementById("quote-text");
  const quoteAuthorElement = document.getElementById("quote-author");
  quoteElement.dataset.currentQuoteId = id;

  quoteTextElement.textContent = text;
  quoteAuthorElement.textContent = author;
  handlFavorite(isFavorite);
}

function chooseRandomQuote(quotes) {
  const randomIndex = ganerateRandomIndex(quotes.length);
  return quotes[randomIndex];
}

function findQuoteId(quotes, id) {
  return quotes.find((quote) => {
    quote.id === id;
  });
}

export { hendelQuote, displayQuote, findQuoteId };
