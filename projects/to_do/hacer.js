$(document).ready(function(){
    $("#button").click(function(){
        var toAdd = $("input[name=checkListItem]").val();
        $('.list').append("<div class='item'>" + "<input type='checkbox'>" + toAdd + "</input>" + "</div>");
        $(document).on('click', '.item', function(){
        $(this).remove();
        });
    });
});