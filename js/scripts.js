$(document).ready(function() {

    $("#list form").submit(function(event) {

        $("#list").hide();
        var items = ["item1", "item2", "item3", "item4", "item5", "item6", "item7"];

        items.forEach(function(item) {

            var userInput = $("input#" + item).val();

            $("#inputtedList").append("<li>" + userInput + "</li>");

        });
        $(".panel").show();

        event.preventDefault();
    });
});
