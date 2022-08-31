var host = 'http://localhost:5070';

var online = window.navigator.onLine;
if (!online){
    alert('You are not currently connected to the internet. Please try again later.');
    $("#body").remove();
}

function scrollTop() {
    $(this).scrollTop(0);
}

function showThanks() {
    $(".container").html($("#view-thanks").html());
    scrollTop();
}

function addAccordion() {
    window.setTimeout(function () {
        var acc = document.getElementsByClassName("accordion");
        var i;
        for (i = 0; i < acc.length; i++) {
            acc[i].addEventListener("click", function () {
                /* Toggle between adding and removing the "active" class,
                to highlight the button that controls the panel */
                this.classList.toggle("active");

                /* Toggle between hiding and showing the active panel */
                var panel = this.nextElementSibling;
                if (panel.style.display === "block") {
                    panel.style.display = "none";
                } else {
                    panel.style.display = "block";
                }
            });
        }
    }, 100);
}


$(document).ready(function () {

    var firstTime = sessionStorage.getItem('firstTime');
    if (firstTime === null) {
        sessionStorage.setItem('firstTime', 1);
        $('#subModal').modal('show');
    }

    $(document).click(function () {
         $('.navbar-collapse').collapse('hide');
    });

    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
        var currentScrollPos = window.pageYOffset;
        if (prevScrollpos > currentScrollPos || currentScrollPos < 100 || $('.navbar-collapse').is(':visible')) {
            $(".navbar").css("top", "0");
        } else {
            $(".navbar").css("top", "-80px");
        }
        prevScrollpos = currentScrollPos;
    }
 
    $('.navbar-collapse').on('show.bs.collapse', function() { $('.navbar-brand').hide(); });
    $('.navbar-collapse').on('hidden.bs.collapse', function() { $('.navbar-brand').show(); });

    addAccordion();

    $("#leaseInfo").tooltip({
        'container': 'body',
        'placement': 'bottom'
    });

    $("#question-submit").click(function (e) {
        e.preventDefault();
        var submissionName = $("#name").val();
        var submissionSubject = $("#subject").val();
        var submissionMessage = $("#message").val();

        var valid = true;
            if (submissionName === "") {
                $("#name").css("border-bottom", "3px solid rgb(200, 50, 50)");
                $("#name + label").css("color", "rgb(200, 50, 50)");
                valid = false;
            } else {
                $("#name").css("border-bottom", "2px solid rgb(20, 20, 20)");
                $("#name + label").css("color", "rgb(20, 20, 20)");
            }
            if (submissionSubject === "") {
                $("#subject").css("border-bottom", "3px solid rgb(200, 50, 50)");
                $("#subject + label").css("color", "rgb(200, 50, 50)");
                valid = false;
            } else {
                $("#subject").css("border-bottom", "2px solid rgb(20, 20, 20)");
                $("#subject + label").css("color", "rgb(20, 20, 20)");
            }
            if (submissionMessage === "") {
                $("#message").css("border-bottom", "3px solid rgb(200, 50, 50)");
                $("#message + label").css("color", "rgb(200, 50, 50)");
                valid = false;
            } else {
                $("#message").css("border-bottom", "2px solid rgb(20, 20, 20)");
                $("#message + label").css("color", "rgb(20, 20, 20)");
            }

        if (valid) {
            var link = "mailto:prod.freo@gmail.com?subject=" + submissionSubject + "&body=" + submissionMessage + "%0D%0A%0D%0A" + submissionName;
            window.location.href = link;
            showThanks();
        }
    }); 

});