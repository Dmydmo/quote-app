import { hendelQuote } from "./handlers/quote.js";

const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", hendelQuote);
