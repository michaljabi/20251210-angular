/* Wnioskowanie typów w TS */


function giveMeNumber() {
    return 10;
}

async function giveMeNumber2() {
    return 10;
}
// martix, bo pod spodem to tak naprawdę to:
function giveMeNumber3() {
    return Promise.resolve(10);
}



