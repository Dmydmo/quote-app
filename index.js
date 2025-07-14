import quotes from "./src/date/quotes.js";
import { hendelQuote } from "./src/handlers/quote.js";
let currentQuote = null;

function setCurrantQuote(quote) {
  currentQuote = quote;
}
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", () =>
  hendelQuote(quotes, setCurrantQuote)
);
export { currentQuote };
