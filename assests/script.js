

// TODO: Add a listener for click events on the save button. This code should
// use the id in the containing time-block as a key to save the user input in
// local storage. HINT: What does `this` reference in the click listener
// function? How can DOM traversal be used to get the "hour-x" id of the
// time-block containing the button that was clicked? How might the id be
// useful when saving the description in local storage?
//


// TODO: Add code to get any user input that was saved in localStorage and set
// the values of the corresponding textarea elements. HINT: How can the id
// attribute of each time-block be used to do this?





// TODO: Add code to display the current date in the header of the page.
// Display Current Date
var currentTime = dayjs().format('dddd MMMM, MM')
$("#currentDay").text(currentTime);
console.log(currentTime);

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(document).ready(function () {

    // click event listener 
    $('#Btn').on("click", function () {
        console.log("Button was pressed")
        var text = $(this).sibling(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })


    // TODO: Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. HINTS: How can the id
    // attribute of each time-block be used to conditionally add or remove the
    // past, present, and future classes? How can Day.js be used to get the
    // current hour in 24-hour time?

    // Hours in local storage 
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour1 .description").val(localStorage.getItem("hour1"));
    $("#hour2 .description").val(localStorage.getItem("hour2"));
    $("#hour3 .description").val(localStorage.getItem("hour3"));
    $("#hour4 .description").val(localStorage.getItem("hour4"));
    $("#hour5 .description").val(localStorage.getItem("hour5"));


    function theSchedule() {
        // time it is right now
        var exactTime = dayjs().hour();
        console.log(exactTime)

        $(".time-block").each(function () {
            // every hour to compare to what time it is now
            var notTime = parseInt($(this).attr("id").split("hour")[1]);
            console.log(notTime);

            if (notTime < exactTime) {
                $(this).removeClass("future");
                $(this).removeClass("present")
                $(this).addClass("past");
            }

            else if (notTime < exactTime) {
                $(this).removeClass("future");
                $(this).removeClass("past")
                $(this).addClass("present");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("past")
                $(this).addClass("future");
            }
        });

    };

    theSchedule();
});
