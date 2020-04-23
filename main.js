// adds welcome information to HTML
// adds instruction information to HTML
document.querySelector('.welcome').innerHTML += `<p>All of the things you want.</p><p>None of the extra shit.</p>`
document.querySelector('.instructions').innerHTML += `<p>Enter a band name below to start your list.</p><p>Move a band up or down the list with the arrows.</p><p>Delete bands with the red button next to the band name.</p><p>Save your list when you're finished to access it later.</p>`

// outputs user's input to the DOM when user clicks save button
// outputs ordered numbers (1, 2, 3, etc.) before band name to make a list
// outputs up and down buttons to the left, delete button to the right of band name
// no  output if no name given

const bandList = document.querySelector('.bandList');
let bandNumber = 1;
const takeNumber = function (bandName) {
    return bandNumber++ + '. ' + bandName;
}        

document.querySelector('#addBand').addEventListener("click", event => {
    const bandName = document.querySelector('#bandName').value;
    if (bandName !== '') {
        bandList.innerHTML += `<li><button class="up ${bandNumber}">⯅</button><button class="down ${bandNumber}">⯆</button><p>${takeNumber(bandName)}</p><button class="delete">⛔</button></li>`;
    }
});

// moves band name up the list when up button clicked

document.querySelector('.list_container').addEventListener('click', event => {
    if (event.target.classList.contains('up') && event.target.classList.contains('1') !== true) {
        const currentBandNumber = event.target.classList[1];
        event.target.className = `up ${currentBandNumber - 1}`;
        const currentBand = document.querySelectorAll('.up')[currentBandNumber - 1].parentElement;
        const previousBand = document.querySelectorAll('.up')[currentBandNumber - 2].parentElement;
        const parentEl = currentBand.parentElement;
        parentEl.insertBefore(currentBand, previousBand);
    }
})
