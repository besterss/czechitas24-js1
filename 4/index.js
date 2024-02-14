/*
V předchozí lekci jsem vytvářeli stránku pro registraci na očkování. Chtěli jsme po uživateli jméno a věk. Nyní budeme chtít, aby uživatel zadal také heslo. To bychom v pozdější verzi aplikaci mohli použít například k přihlášení do systému.

Vytvořte novou stránku, nebo pokračujte ve stránce z předchozí lekce pro registraci na očkování.

Nejdříve nechte uživatele zadat všechny hodnoty, tedy jméno, věk i heslo. Uložte si je do dobře pojmenovaných proměnných.
Napište první podmínku, ve které zkontrolujte, že věk uživatele je větší nebo roven 65. Pokud ano, vypište do stránky „věk v pořádku“. Pokud uživateli není alespoň 65 let, vypište „nízký věk“.
Napište druhou podmínku, která zkontroluje, zda je zadané heslo delší než osm znaků. Pokud není, vypište „slabé heslo“. Heslo se bude kontrolovat pouze v případě, kdy uživatel splnil první podmínku (věk alespoň 65 let).
*/ 



let vek = Number(prompt("Zadej svůj věk"))
let jmeno = prompt("Zadej své jméno")
let heslo = prompt("Zadej svoje heslo ")

let vysledekOckovani = document.getElementById("vysledekOckovani")

if(vek >= 65) {
    vysledekOckovani.innerHTML = "Věk v pořádku <br />"
    if (heslo.length > 8) {
        if(prompt("zadej heslo") === heslo) {
            vysledekOckovani.innerHTML += "Heslo je v pořádku a bylo správně zadané"
        }else{
            vysledekOckovani.innerHTML += "Heslo je v pořádku a nebylo zadáno správně zadané"
        }
    }else{
        vysledekOckovani.innerHTML += "Heslo není v pořádku"
        console.log("Odesilám k očkování")
    }
}else{
    vysledekOckovani.innerHTML = "Věk není v pořádku"
}