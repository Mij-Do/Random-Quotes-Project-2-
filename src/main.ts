// call the Elements
let getQuoteBtn = document.getElementById('btn');
let quotes = document.getElementById('quotes');


interface Quotes {
    author: string;
    content: string;
}

let randomQuotes: Quotes[];

// check if the localstotage has Item "Quotes"

if (localStorage.getItem('Quotes')) {
    randomQuotes = JSON.parse(localStorage.Quotes);
} else {
    randomQuotes = [];
};

// get the Quotes from api

async function getQuotes (api: string) {
    let data: Quotes[] = await fetch(api)
    .then(res => res.json())
    .then(data => data)
    .catch(() => {console.error('Error on getQuotes Function')});

    localStorage.setItem('Quotes', JSON.stringify(data));
}


// event to get and show quotes

getQuoteBtn?.addEventListener('click', () => {
    getQuotes('https://api.quotable.io/quotes/random');
    showQuotes ();
});


function showQuotes () {
    randomQuotes = JSON.parse(localStorage.Quotes);

    quotes!.innerHTML = `
        <article>"${randomQuotes[0].content}"</article>
        <article>(${randomQuotes[0].author})</article>
    `;
};