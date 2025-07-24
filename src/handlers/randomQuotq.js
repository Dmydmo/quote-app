import quotes from "../date/quotes.js";
import { ganerateRandomIndex } from "../utils/math.js";

function getRandomQuote() {
  return { ...quotes[ganerateRandomIndex(quotes.length)] };
}

export { getRandomQuote };
