var currentTime = dayjs().format('dddd MMMM, MM')
$("#currentDay").text(currentTime);
console.log(currentTime);

$(document).ready(function () {

    $("Button").click(function () {
        console.log("Button was pressed")
        var time = $(this).parent().attr("id");
        var text = $(this).siblings(".description").val();
        // Save text in local storage
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
    $("#hour17 .description").val(localStorage.getItem("hour17"));
    $("#hour18 .description").val(localStorage.getItem("hour18"));


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

            else if (notTime = exactTime) {
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
