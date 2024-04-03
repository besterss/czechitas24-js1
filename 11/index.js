/*
const elMain = document.querySelector("main")
const articleId = window.location.hash.slice(1)
const article = articles.find((ar) => ar.id === articleId)

elMain.innerHTML += `
  <article>
    <h2>${article.title}</h2>
    <p>${article.lead}</p>
    <p>${article.content}</p>
  </article>
`
*/
const predpovedi = predpoved

const elPredpovedi = document.getElementById("predpovedi")

for (const [key, value] of Object.entries(predpovedi)) {
  elPredpovedi.innerHTML += `<li><a href="detail.html#${key}">${value.den}</a></li>`
}
