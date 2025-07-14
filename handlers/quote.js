import quotes from "../date/quotes.js";
import { handlFavorite } from "./Handler.js";
import { ganerateRandomIndex } from "../src/utils.js";

let currentQuote = null;

function hendelQuote() {
  const randomQuote = chooseRandomQuote(quotes);
  currentQuote = randomQuote;
  displayQuote(randomQuote);
}

function displayQuote(quote) {
  const { text, author, isFavorite } = quote;

  const quoteElement = document.getElementById("quote");
  const quoteAuthorElement = document.getElementById("quote-author");
  quoteElement.textContent = text;
  quoteAuthorElement.textContent = author;
  handlFavorite(isFavorite);
}

function chooseRandomQuote() {
  const randomIndex = ganerateRandomIndex(quotes.length);
  return quotes[randomIndex];
}
export { hendelQuote, currentQuote };
