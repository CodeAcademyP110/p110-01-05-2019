//first task

// $(document).ready(function () {
//     "use strict";
    
//     $(document).on("click", ".toggle-menu", function(){
//         $("#menu-aside").toggleClass("closed");
//         $(".page").toggleClass("expanded");
//     });

// })


$(function(){
    let x;
    let y;

    $(document).on("click", ".img-holder", function(e){
        if(e.target.nodeName === "IMG")
        {
            x = e.pageX + "px";
            y = e.pageY + "px";
    
            $(".tag-creator").css({
                left: x,
                top: y
            }).addClass("active")
            .find("input").focus();
        }
    })

    $(document).on("click", ".btn-cancel", function(){
        $(".tag-creator").removeClass("active")
                         .find("input").val("");
    })

    $(document).on("keyup", ".input-holder input", function(e){
        if(e.keyCode === 13)
        {
            const tagText = $(this).val().trim();

            if(tagText)
            {
                $("<span>").addClass("tag")
                           .text(tagText)
                           .css({
                               left: x,
                               top: y
                           })
                           .appendTo($(".img-holder"));

                $(".tag-creator").removeClass("active")
                                 .find("input").val("");
            }
        }
    })

    $(document).on("click", ".tag", function(){
        $(this).attr("contenteditable", true);
    })

    $(document).on("keydown", ".tag", function(e){
        if(e.keyCode === 13)
        {
            e.preventDefault();
            $(this).attr("contenteditable", false);
        }
    })
})