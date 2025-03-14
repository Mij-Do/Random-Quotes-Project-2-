// call the Elements
let getQuoteBtn = document.getElementById('btn');
let quotes = document.getElementById('quotes');

let randomQuotes;

if (localStorage.getItem('Quotes')) {
    randomQuotes = JSON.parse(localStorage.Quotes);
} else {
    randomQuotes = [];
}

async function getQuotes (api: string) {
    let data = await fetch(api)
    .then(res => res.json())
    .then(data => data)
    .catch(() => {console.error('Error on getQuotes Function')});

    localStorage.setItem('Quotes', JSON.stringify(data));
}

getQuoteBtn?.addEventListener('click', () => {
    getQuotes('https://api.quotable.io/quotes/random');
    showQuotes ();
});

function showQuotes () {
    randomQuotes = JSON.parse(localStorage.Quotes);

    quotes!.innerHTML = `
        <article>"${randomQuotes[0].content}"</article>
        <article>(${randomQuotes[0].author})</article>
    `
}