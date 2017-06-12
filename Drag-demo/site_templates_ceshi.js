$(function () {
    $( ".sourcelist>span" ).draggable({
        helper:"clone",
        //connectToSortable: ".tytem-drop",
        revert: "invalid",
        start:function(event,ui){
            $("#parameter").val($(this).attr("data-type"));
        }
    });
    //$( ".tytem-drop" ).sortable({
    //    revert: true
    //});
    //因为他们要拖动，所以尽量设置他们的文字不能选择
    $( ".sourcelist>span").disableSelection();
    $( ".tytem-drop").droppable();

    //drop事件
    $( ".tytem-drop").on("drop", function (event,ui) {
        //console.log("----",  $("#parameter").val())
        var _this = $(this);
        _this.append( tyCodes.eleDiv[$("#parameter").val()] );
    });
    //
});
























