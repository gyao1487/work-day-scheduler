//Display time and date at the top
$('#currentDay').text(moment().format('MMMM Do YYYY, h:mm a'));



//Display
/*function colorCode ()
    let currentTime = moment().hours();
    const timeblock = document.getelementsbyclass('time-block')
    let timeblockTime = timeblock. */
const colorcode = document.getElementsByClassName("colorcode");
let currentHour = moment().hours(); 


//Change color depending on current time
Array.from(colorcode).forEach(element => {
    let colorcodeHour = parseInt(colorcode.id);
    if (currentHour === colorcodeHour) {
        colorcode.setAttribute('class','present')
        } else if (currentHour > colorcodeHour) {
        colorcode.setAttribute('class','future') //This is supposed to turn the textarea green as a test (since it is past 5pm rn)
        } else if (currentHour < colorcodeHour) {
        colorcodedDiv.setAttribute('class','future')
        }
    }
)


//Save button
    //Add event listener to save button
const saveButton = document.getElementsByClassName("saveBtn")
const input = document.getElementsByClassName ("description")

//saveButton.addEventListener("click", )

  
    //Save to local storage as key value pair (time,task)

//Open Page
    // Saved events are rendered
