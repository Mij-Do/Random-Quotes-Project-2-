"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
// call the Elements
let getQuoteBtn = document.getElementById('btn');
let quotes = document.getElementById('quotes');
let randomQuotes;
// check if the localstotage has Item "Quotes"
if (localStorage.getItem('Quotes')) {
    randomQuotes = JSON.parse(localStorage.Quotes);
}
else {
    randomQuotes = [];
}
;
// get the Quotes from api
function getQuotes(api) {
    return __awaiter(this, void 0, void 0, function* () {
        let data = yield fetch(api)
            .then(res => res.json())
            .then(data => data)
            .catch(() => { console.error('Error on getQuotes Function'); });
        localStorage.setItem('Quotes', JSON.stringify(data));
    });
}
// event to get and show quotes
getQuoteBtn === null || getQuoteBtn === void 0 ? void 0 : getQuoteBtn.addEventListener('click', () => {
    getQuotes('https://api.quotable.io/quotes/random');
    showQuotes();
});
function showQuotes() {
    randomQuotes = JSON.parse(localStorage.Quotes);
    quotes.innerHTML = `
        <article>"${randomQuotes[0].content}"</article>
        <article>(${randomQuotes[0].author})</article>
    `;
}
;
