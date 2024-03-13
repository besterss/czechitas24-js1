
const btn = document.querySelector("#button-order")
const odstavec = document.querySelector("#odstavec")

btn.addEventListener("click", ()=>{
    btn.innerHTML = "Objednáno!"
    btn.disabled = true
    odstavec.innerHTML = "<p>Objednáno!</p>"
})

btn.disabled = true

setTimeout(()=> {
    btn.disabled = false
    btn.innerHTML = "Objednat"
},8000)

const zarovka = document.querySelector("#zarovka")

zarovka.addEventListener("click", ()=>{
    console.log("ahoj")
    if(zarovka.classList[0] === 'roznuto') {
        zarovka.classList.remove("roznuto")
    }else{
        zarovka.classList.add("roznuto")
    }
})