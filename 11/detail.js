
const predpovedUrl = window.location.hash.slice(1)

const predpovedi = predpoved

const mojePredpoved = predpovedi[predpovedUrl]

const elPredpovedData = document.getElementById('predpovedData')

elPredpovedData.innerHTML = `
    <h1> ${mojePredpoved.datum } </h1>
    <h1> ${mojePredpoved.den } </h1>
    <p>
        <strong>Denní teplota: ${mojePredpoved.denni_teplota } </strong> <br />
        <strong>Ranní teplota: ${mojePredpoved.ranni_teplota } </strong> <br />
        <strong>Odpolední teplota: ${mojePredpoved.odpoledni_teplota } </strong> <br />
        <strong>Rychlost vetru: ${mojePredpoved.rychlost_vetru } </strong> <br />

        <br />
    <hr />
    ${mojePredpoved.popis_pocasi }
    </p>
`
console.log(mojePredpoved)
