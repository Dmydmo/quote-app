import quotes from "./data.js";

document.getElementById("quoteBtn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selected = quotes[randomIndex];
  document.getElementById("quote").textContent = `"${selected.quote}"`;
  document.getElementById("avthor").textContent = `— ${selected.avthor}`;
});
