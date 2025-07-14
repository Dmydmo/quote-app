import { handlFavorite } from "./Handler.js";
import { ganerateRandomIndex } from "../utils.js";

function hendelQuote(quotes, setCurrantQuote) {
  console.log(quotes);
  const randomQuote = chooseRandomQuote(quotes);
  setCurrantQuote(randomQuote);
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

function chooseRandomQuote(quotes) {
  const randomIndex = ganerateRandomIndex(quotes.length);
  return quotes[randomIndex];
}
export { hendelQuote };
