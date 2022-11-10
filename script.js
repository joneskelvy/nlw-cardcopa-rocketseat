let isExplorer = true

function changeCard(event) {
const card = event.currentTarget
const backgroundImage = isExplorer 
? "url(./assets/icon-card-ignite.svg)" 
: "url(./assets/icon-card-explorer.svg)"
isExplorer = !isExplorer
card.style.backgroundImage = backgroundImage

}