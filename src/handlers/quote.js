import { handlFavorite } from "./favorite.js";
import { ganerateRandomIndex } from "../utils/math.js";

function hendelQuote(quotes, setCurrantQuote) {
  const randomQuote = chooseRandomQuote(quotes);
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
export { hendelQuote };
