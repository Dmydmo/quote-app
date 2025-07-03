const quotes = [
  "Будь собой — прочие роли уже заняты. — Оскар Уайльд",
  "Самое трудное — решиться действовать, остальное — упорство. — Амелия Эрхарт",
  "Великие дела не делаются в одиночку. — Стив Джобс",
  "Кто хочет — ищет возможности. Кто не хочет — ищет оправдания.",
  "Не позволяй страху остановить тебя на пути к мечте.",
];

document.getElementById("quoteBtn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").textContent = quotes[randomIndex];
});
