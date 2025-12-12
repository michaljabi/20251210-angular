/*

3 levele asynchronicznosci JS:

1. callbacks (natywne)  -> happy path
2. Promise (natywne) -> happy path + sad path  ale ... JEDNORAZOWE !
3. Observables (NIE MA NATYWNIE, trzeba lib) -> happy path + sad path + wielorazowo mogę zwracać dane i je podzielić + LAZY

*/

// PROVIDER
function getMyMoneyFromVault(collect: (v: number) => void) {
  collect(150);
  setTimeout(() => {
    collect(150);
  }, 4000);
}

// CONSUMER:
getMyMoneyFromVault((value: number) => {
  console.log(value);
});

/*
// CONSUMER 2:
getMyMoneyFromVault((value: number) => {
  console.log(value);
});

// CONSUMER 3:
getMyMoneyFromVault((value: number) => {
  console.log(value);
});
*/

// level 2
// PROVIDER:
function getMyMoneyFromVaultP(password: string) {

  /*  
  if (password === 'RG1283687691S') {
    // Promise.resolve(150);
    return Promise.resolve(300);
  }
  return Promise.reject(new Error('WRONG PASSWORD'));
  */

  // Pełne API === pełna odpowiedzialnosć
  return new Promise((resolve, reject) => {
        if (password === 'RG1283687691S') {
            // resolve(150);
            resolve(300);
        } else {
            reject(new Error('WRONG PASSWORD'));
        }
  })
}

// CONSUMER:
getMyMoneyFromVaultP('129376978126387')
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err.message);
  });

// CONSUMER 2:
getMyMoneyFromVaultP('RG1283687691S')
  .then((value) => {
    console.log(value);
    return getMyMoneyFromVaultP('RG1283687691S')
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => {
    console.log(err.message);
  });