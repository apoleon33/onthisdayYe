let date = new Date();
var jour = date.getDate();
var mois = date.getMonth() + 1;
var annee = date.getFullYear();

const text = document.getElementById("date");
text.textContent = "On this day Ye ";

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
}
