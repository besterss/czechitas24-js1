//hlaska('mujElement', 'Dobrou noc Holky!', 'rozloučení')

const vratMaximalniCislo = (cislo1, cislo2) => {
  if(cislo1 > cislo2) {
    alert("Číslo 2:("+cislo2+") je menší než číslo 1: ("+cislo1+")")
    return cislo1
  }else if(cislo1 < cislo2){
    alert("Číslo 2:("+cislo2+") je větší než číslo 1: ("+cislo1+")")
    return cislo2
  }else{
    return false
  }
}

const isDIC = (inputStr) => {
  // kontrola délky
  if (inputStr.length < 11) {
    return false;
  }
  if (inputStr.length > 12) {
    return false;
  }

  // kontrola prefixu CZ
  const prefix = inputStr.slice(0, 2);
  if (prefix !== 'CZ') {
    return false;
  }

  // kontrola, že za prefixem jsou jen číslice
  const digits = inputStr.slice(2);
  if (!validator.isInt(digits)) {
    return false;
  }

  return true;
};