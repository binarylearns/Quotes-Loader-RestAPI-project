
let quotes = [];

async function getQuotes() {
    try {
        const response = await fetch("/static/data/quotes.json");

        if (!response.ok) {
            throw new Error("Could not load quotes");
        }

        quotes = await response.json();

        showRandomQuote();

    } catch (error) {
        console.error(error);
    }
}

function showRandomQuote() {
    const container = document.getElementById("quotes-container");

    if (quotes.length === 0) {
        container.textContent = "No quotes available.";
        return;
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];

    container.innerHTML = "";

    const card = document.createElement("div");
    card.classList.add("quote-card");

    const quoteText = document.createElement("h3");
    quoteText.textContent = `"${randomQuote.quote}"`;

    const author = document.createElement("p");
    author.textContent = `— ${randomQuote.author}`;

    card.appendChild(quoteText);
    card.appendChild(author);

    container.appendChild(card);
}
