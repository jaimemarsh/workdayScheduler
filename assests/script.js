
var currentTime = dayjs().format('dddd MMMM, DD')
$("#currentDay").text(currentTime);
console.log(currentTime);

$(document).ready(function () {

    $("Button").click(function () {
        console.log("Button was pressed")
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();
        // Save text in local storage
        // key, value
        localStorage.setItem(time, text);
    })

    // Hours in local storage 
    $("#hour9 .description").val(localStorage.getItem("hour9"));
    $("#hour10 .description").val(localStorage.getItem("hour10"));
    $("#hour11 .description").val(localStorage.getItem("hour11"));
    $("#hour12 .description").val(localStorage.getItem("hour12"));
    $("#hour13 .description").val(localStorage.getItem("hour13"));
    $("#hour14 .description").val(localStorage.getItem("hour14"));
    $("#hour15 .description").val(localStorage.getItem("hour15"));
    $("#hour16 .description").val(localStorage.getItem("hour16"));

    function theSchedule() {
        // time it is right now
        var exactTime = dayjs().hour();
        console.log(exactTime)

        $(".time-block").each(function () {
            // every hour to compare to what time it is now
            var notTime = parseInt($(this).attr("id").split("hour")[1]);
            console.log(notTime);

            // past color will be grey
            if (notTime < exactTime) {
                $(this).removeClass("future");
                $(this).removeClass("present")
                $(this).addClass("past");
            }
            // present color will be red
            else if (notTime === exactTime) {
                $(this).removeClass("future");
                $(this).removeClass("past")
                $(this).addClass("present");
            }
            else {
                // future color will br green
                $(this).removeClass("present");
                $(this).removeClass("past")
                $(this).addClass("future");
            }
        });

    };

    theSchedule();
});
