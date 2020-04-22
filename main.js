// outputs user's input to the DOM when user clicks save button
// outputs ordered numbers (1, 2, 3, etc.) before band name to make a list
// outputs delete button to the right of band name

const bandList = document.querySelector('.bandList');
let bandNumber = 1

document.querySelector('#addBand').addEventListener("click", event => {
    const bandName = document.querySelector('#bandName').value;
    if (bandName !== '') {
        const takeNumber = function (bandName) {
            return bandNumber++ + '. ' + bandName;
        }
        bandList.innerHTML += `<section><ul><li><button class="up ${bandNumber}"></button><button class="down ${bandNumber}"></button>${takeNumber(bandName)}<button id="delete"></button></li></ul></section>`;
    }
});

// adds welcome information to HTML
// adds instruction information to HTML

document.querySelector('.welcome').innerHTML += `<p>All the things you want. None of the extra shit.</p>`
document.querySelector('.instructions').innerHTML += `<p>Enter a band name below to start your list.</p><p>Move a band up or down the list with the up and down arrows.</p><p>Delete bands with the red button next to the band name.</p><p>Save your list when you're finished to access it later.</p>`



