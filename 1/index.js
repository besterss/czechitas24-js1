/* 
Délka filmu

V programu kin se často uvádí délka filmu v minutách. 

Například rozšířená verze filmu :i[Pán prstenů: Dvě věže] trvá 223 minut. My bychom ovšem délku filmu raději věděli v hodinách a minutách. 

celková doba filmu: 223 / 60 
-> Math.floor()
*/

const nazevFilmu = 'Pan prstenů: Dvě věže'
const delkaFilmu = 223

let hodiny = Math.floor(delkaFilmu / 60) // zde dělíme minuty na hodiny a celý výsledek zaokrouhlujeme dolů
let minuty = delkaFilmu - (hodiny * 60)

// tady řeším výpis do konzole
console.log('Úkol č.1. - Délka filmu:')
console.log(
    'Náš film ' + nazevFilmu + ' má: '+ hodiny + ' hodin a ' + minuty + ' minut.'  
)

/*
E-mail

Sestavte e-mailovou adresu tak, že sečtete dohromady vaše křestní jméno, znak tečka, vaše příjmení a koncovku @mujmail.com.
Celou e-mailovou adresu vypište do stránky.

*/ 

const jmeno = 'Filip'
const prijmeni = 'Prochazka'

const koncovkaEmail = '@mujmail.com'

console.log('Úkol č.2. - Email:')
console.log(
    jmeno + '.' + prijmeni + koncovkaEmail
)