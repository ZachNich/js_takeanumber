// const scum = takeNumber("Galactic Scum")
// console.log(scum)  // This should print "1. Galactic Scum" in the console

// const under = takeNumber("Underdogs")
// console.log(under)  // This should print "2. Underdogs" in the console

// personal JS added below

const bandList = document.querySelector('.bandList');
let bandNumber = 1

document.querySelector('#saveBands').addEventListener("click", event => {
    const bandName = document.querySelector('#bandName').value;
    const takeNumber = function (bandName) {
        return bandNumber++ + '. ' + bandName;
    }
    bandList.innerHTML += `<section><ul><li>${takeNumber(bandName)}</li></ul></section>`;
});