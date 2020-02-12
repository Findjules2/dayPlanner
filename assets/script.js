//click function to save text
$(".saveBtn").on("click", function() {
    // get ElementByID
    //save text to blank variable
    console.log($(this.dataset.time))
    var inputText = $(this.dataset.time).val()
    console.log(inputText)
    //save blank variable to local storage
    var inputTextArray = JSON.parse(localStorage.getItem("inputTextArray") || "[]")
    var newInput = {
        text: inputText,
        id: this.dataset.time
    }
    inputTextArray.push(newInput)
    localStorage.setItem("inputTextArray", JSON.stringify(inputTextArray))
})

//get from local storage and display in timeBlock
var inputTextArray = JSON.parse(localStorage.getItem("inputTextArray") || "[]")
inputTextArray.forEach(function(obj) {
    $(obj.id).val(obj.text)
})

$("#currentDay").text(Date(Date.now()))  
//var currentDateAndTime = Date(Date.now());// exp: Fri Oct 25 2019 17:40:56 GMT-0400 (Eastern Daylight Time)
var timeChange = setInterval(
    function () {
    $("#currentDay").text(Date(Date.now()))   
}, 1000)

var currentHour = new Date().getHours();//Current hour in military time`

console.log(currentHour)

$('#timeBlock'+currentHour).removeClass('future')
$('#timeBlock'+currentHour).addClass('present')

$(document).ready(function(){
    for (var t =9; t < currentHour; t++) {
        $('#timeBlock'+t).removeClass('future')
    $('#timeBlock'+t).addClass('past') 
    }
    });

    // for (var i = 0; i < timeblock.length; i++) {
    //     console.log(currentHour[i].classList);
    //     if ('#timeBlock' === currentHour) {
    //         $('#timeBlock'[i]).addClass("present");
    //     }
    //     else if ('#timeBlock' < currentHour) {
    //         $('#timeBlock'[i]).addClass("past");    
    //     }
    //     else if ('#timeBlock' > currentHour) {
    //         $('#timeBlock'[i]).addClass("future");    
    //     }
    // }
