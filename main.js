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

document.querySelector('#addBand').addEventListener('click', event => {
    const bandName = document.querySelector('#bandName').value;
    if (bandName !== '') {
        if (document.querySelector('.bandList').hasChildNodes) {
            const allBands = document.querySelector('.bandList').childNodes;
            const lastID = allBands.length;
            bandList.innerHTML += `<li id="${lastID + 1}"><button class="up">⯅</button><button class="down">⯆</button><p>${takeNumber(bandName)}</p><button class="delete">⛔</button></li>`;
        } else {
            bandList.innerHTML += `<li id="1"><button class="up">⯅</button><button class="down">⯆</button><p>${takeNumber(bandName)}</p><button class="delete">⛔</button></li>`;
        }
    }
})

// moves band name up the list when up button clicked
// doesn't do anything if first list item is clicked
// changes list classes appropriately
document.querySelector('.list_container').addEventListener('click', event => {
    const currentBandNumber = Number(event.target.parentElement.id);
    if (event.target.classList.contains('up') && currentBandNumber !== 1) {
        const currentBand = document.querySelectorAll('.up')[currentBandNumber - 1].parentElement;
        const parentEl = currentBand.parentElement;
        const previousBand = document.querySelectorAll('.up')[currentBandNumber - 2].parentElement;
        event.target.parentElement.id = `${currentBandNumber - 1}`;
        previousBand.id = `${currentBandNumber}`;
        parentEl.insertBefore(currentBand, previousBand);
    }
})

// 2. a. Need to learn RegEx so you can replace part of a string. Then replace the numbered part of the band name string to the appropriate number when moved.  
// 2. b. You could also move the numbers to another element that is static and doesn't change since the numbers in the list should never move.

// moves band name down the list when down button clicked
// doesn't do anything if last list item is clicked
// changes list classes appropriately
document.querySelector('.list_container').addEventListener('click', event => {
    const currentBandNumber = Number(event.target.parentElement.id);
    if (event.target.classList.contains('down') && currentBandNumber !== document.querySelectorAll('.down').length) {
        const currentBand = document.querySelectorAll('.down')[currentBandNumber - 1].parentElement;
        const parentEl = currentBand.parentElement;
        const nextBand = document.querySelectorAll('.down')[currentBandNumber].parentElement;
        event.target.parentElement.id = `${currentBandNumber + 1}`;
        nextBand.id = `${currentBandNumber}`;
        parentEl.insertBefore(nextBand, currentBand);
    }
})

// removes band name when delete button is clicked
// adjusts classes of other bands appropriately
document.querySelector('.list_container').addEventListener('click', event => {
    const currentBandNumber = Number(event.target.parentElement.id);
    if (event.target.classList.contains('delete')) {
        const allBands = document.querySelector('.bandList').childNodes;
        for (let i = 0; i < allBands.length; i++) {
            if (i >= currentBandNumber) {
                allBands[i].id = i;
            }
        }
        const currentBand = document.querySelectorAll('.delete')[currentBandNumber - 1].parentElement;
        currentBand.remove();
    }
})

// id number of list item added from 'add band' button will be 1 if no list items, or the last list item's id + 1
