
const allButtons = document.querySelectorAll('.saveBtn');
const btns = document.getElementsByClassName("saveBtn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        alert('Task successfully saved!')
    })
}

//Display time and date at the top
$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm a'));

//Change color depending on current time
const colorcode = document.getElementsByClassName("colorcode");
let currentHour = moment().hours(); 
Array.from(colorcode).forEach(colorcode => {
    let colorcodeHour = parseInt(colorcode.id);
    if (currentHour === colorcodeHour) {
        colorcode.setAttribute('class','present')
        } else if (currentHour > colorcodeHour) {
        colorcode.setAttribute('class','past')
        } else if (currentHour < colorcodeHour) {
        colorcode.setAttribute('class','future')
        }
    }
)

//Add event listener to save buttons and save data to storage
const saveButton9 = document.querySelector("#btn9");
const saveButton10 = document.querySelector("#btn10");
const saveButton11 = document.querySelector("#btn11");
const saveButton12 = document.querySelector("#btn12");
const saveButton13 = document.querySelector("#btn13");
const saveButton14 = document.querySelector("#btn14");
const saveButton15 = document.querySelector("#btn15");
const saveButton16 = document.querySelector("#btn16");
const saveButton17 = document.querySelector("#btn17");

//save data as key value pairs 
saveButton9.addEventListener("click", function() {
    let input = document.getElementById("9");
    let textInput = input.value;
    let time = 9;
    localStorage.setItem(time, textInput);
})

saveButton10.addEventListener("click", function() {
    let input = document.getElementById("10");
    let textInput = input.value;
    let time = 10;
    localStorage.setItem(time, textInput);
})

saveButton11.addEventListener("click", function() {
    let input = document.getElementById("11");
    let textInput = input.value;
    let time = 11;
    localStorage.setItem(time, textInput);
})

saveButton12.addEventListener("click", function() {
    let input = document.getElementById("12");
    let textInput = input.value;
    let time = 12;
    localStorage.setItem(time, textInput);
})

saveButton13.addEventListener("click", function() {
    let input = document.getElementById("13");
    let textInput = input.value;
    let time = 13;
    localStorage.setItem(time, textInput);
})

saveButton14.addEventListener("click", function() {
    let input = document.getElementById("14");
    let textInput = input.value;
    let time = 14;
    localStorage.setItem(time, textInput);
})

saveButton15.addEventListener("click", function() {
    let input = document.getElementById("15");
    let textInput = input.value;
    let time = 15;
    localStorage.setItem(time, textInput);
})

saveButton16.addEventListener("click", function() {
    let input = document.getElementById("16");
    let textInput = input.value;
    let time = 16;
    localStorage.setItem(time, textInput);
})

saveButton17.addEventListener("click", function() {
    let input = document.getElementById("17");
    let textInput = input.value;
    let time = 17;
    localStorage.setItem(time, textInput);
})

//Load saved data from Local Storage
function renderText() {
    let savedText9 = localStorage.getItem('9');
    let savedText10 = localStorage.getItem('10');
    let savedText11 = localStorage.getItem('11');
    let savedText12 = localStorage.getItem('12');
    let savedText13 = localStorage.getItem('13');
    let savedText14 = localStorage.getItem('14');
    let savedText15 = localStorage.getItem('15');
    let savedText16 = localStorage.getItem('16');
    let savedText17 = localStorage.getItem('17');
    document.getElementById('9').textContent = savedText9;
    document.getElementById('10').textContent = savedText10;
    document.getElementById('11').textContent = savedText11;
    document.getElementById('12').textContent = savedText12;
    document.getElementById('13').textContent = savedText13;
    document.getElementById('14').textContent = savedText14;
    document.getElementById('15').textContent = savedText15;
    document.getElementById('16').textContent = savedText16;
    document.getElementById('17').textContent = savedText17;
}
//event listener for rendering saved data when page loads
window.addEventListener('load', renderText)

