let date = new Date();
var jour = date.getDate();
var mois = date.getMonth() + 1;
var annee = date.getFullYear();

const text = document.getElementById("date");
const main = document.getElementById("main");
const quoteTitle = document.getElementById("quoteTitle");
const actualQuote = document.getElementById("quote");
const authorQuoteHolder = document.getElementById("authorQuoteHolder");

text.textContent = "On this day Ye ";

async function makeQuote() {
  let url = "https://api.kanye.rest/";
  let response = await fetch(url);

  let quoteJson = await response.json();

  actualQuote.textContent = `"`;
  actualQuote.textContent += quoteJson.quote;
  actualQuote.textContent += `"`;

  let authorQuote = document.createElement("h2");
  authorQuote.textContent = "- Kanye West.";
  authorQuoteHolder.appendChild(authorQuote);

  return quoteJson.quote;
}

try {
  var numberOfEvents = yeData[mois][jour].length;
  for (let i = 0; i < numberOfEvents; i++) {
    let datas = yeData[mois][jour][i];
    let yearEvent = datas.year;
    let verb = datas.verb;
    let title = datas.title;

    text.textContent += `${verb} ${title} ${annee - yearEvent} years ago.`;
  }
} catch (err) {
  text.textContent += "did absolutely nothing.";

  quoteTitle.textContent = "But for sure he said:";
  makeQuote();
}
