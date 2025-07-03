const quotes = [
  {
    quote: "Будь собой — прочие роли уже заняты.",
    avthor: "Оскар Уайльд",
  },
  {
    quote: "Самое трудное — решиться действовать, остальное — упорство.",
    avthor: "Амелия Эрхарт",
  },
  {
    quote: "Великие дела не делаются в одиночку.",
    avthor: "Стив Джобс",
  },
  {
    quote: "Кто хочет — ищет возможности. Кто не хочет — ищет оправдания.",
    avthor: "Стив Джобс",
  },
  {
    quote: "Не позволяй страху остановить тебя на пути к мечте.",
    avthor: "Оскар Уайльд",
  },
];

document.getElementById("quoteBtn").addEventListener("click", () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const selected = quotes[randomIndex];
  document.getElementById("quote").textContent = `"${selected.quote}"`;
  document.getElementById("avthor").textContent = `— ${selected.avthor}`;
});
