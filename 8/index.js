const weakPassword = (len) => {
  let result = '';
  for (let i = 0; i < len; i++) {
    result += String(i % 10);
  }

  return result;
};

const mediumPassword = (len) => {
  let result = '';
  for (let i = 0; i < len; i++) {
    const digit = Math.floor(Math.random() * 10);
    result += String(digit);
  }

  return result;
};

const strongPassword = (len) => {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789_-/?';
  let result = '';
  for (let i = 0; i < len; i++) {
    const charIndex = Math.floor(Math.random() * chars.length);
    result += chars[charIndex];
  }

  return result;
};


const goodbye = (name) => {
  return 'S pozdravem ' + name;
};

const formalGoodbye = (name) => {
  return "S uctivou poklonou " + name
}

const rudeGoodbye = (name) => {
  return "Zdar a sílů " + name
}

const fillSubject = (subject) => {
  document.querySelector('.email__subject').textContent = subject;
};

const fillGreeting = (greeting) => {
  document.querySelector('.email__greeting').textContent = greeting;
};

const fillBody = (body, name, returnGoodbye) => {
  const bodyElm = document.querySelector('.email__body');
  bodyElm.innerHTML += body;
  const closingElm = document.querySelector('.email__closing');
  closingElm.textContent = returnGoodbye(name);
};



const createAccount = (username, email, password) => {
  let account = {
    username: username,
    email: email,
    password: password(9)
  }

  return account
  //return "Username: " + account.username +" Heslo: " + account.password
}

const confirmRegistration = (account, returnGoodbye) => {
  fillSubject("Registrace nového uživatele")
  fillGreeting("Vážený uživateli " + account.username)
  fillBody("S radostí vám oznamujeme, <br /> že vaše registrace na email "+
  "<strong>"+ account.email +"</strong> "+
  " Byla schválena. Gratulujeme, a Těšíme se na využití naši super uber aplikace :) ", account.username, returnGoodbye
  )
}
