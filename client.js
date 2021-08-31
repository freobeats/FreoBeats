var host = 'http://localhost:5070';
let bg_img = "none";

var online = window.navigator.onLine;
if (!online){
    alert('You are not currently connected to the internet. Please try again later.');
    $("#body").remove();
}


function toggleNav() {
    var signedIn = sessionStorage.getItem('auth');
    var isAdmin = false;

    if (signedIn !== null) {
        signedIn = sessionStorage.getItem('auth').length > 0;
        isAdmin = JSON.parse(sessionStorage.getItem('auth')).user.isAdmin;
    } else if (signedIn === null) {
        signedIn = false;
    }

    $("#loggain, #loginpayment").toggleClass('d-none', signedIn);
    $("#logoutButton, #myPage, #myPageDropdown, #checkoutBtn").toggleClass('d-none', !signedIn);

    if (isAdmin) {
        $(".myPage, #cart, #nyAdmin").toggleClass('d-none', isAdmin);
    }
    $("#adminPage, #nyAdmin").toggleClass('d-none', !isAdmin);
    $("#cart").toggleClass('d-flex', !isAdmin);
}

function scrollTop() {
    $(this).scrollTop(0);
}

function showHome() {
    $(".container").html($("#view-home").html());
    scrollTop();
    $('body').css("background-image", "url(images/berget/main.jpg)");
}

function showThanks() {
    $(".container").html($("#view-thanks").html());
    scrollTop();
}

function showContact() {
    $(".container").html($("#view-contact").html());
    scrollTop();
    $('body').css("background-image", bg_img);

    $("#question-submit").click(function (e) {
        e.preventDefault();
        var submissionName = $("#name").val();
     //   var submissionEmail = $("#email").val();
        var submissionSubject = $("#subject").val();
        var submissionMessage = $("#message").val();

        var valid = true;
        /*    if (!validateEmail(submissionEmail)) {
                $("#email").css("border-color", "rgb(200, 50, 50)");
                valid = false;
            } else { 
                $("#email").css("border-color", "rgb(20, 20, 20)");
            } */
            if (submissionName === "") {
                $("#name").css("border-color", "rgb(200, 50, 50)");
                valid = false;
            } else {
                $("#name").css("border-color", "rgb(20, 20, 20)");
            }
            if (submissionSubject === "") {
                $("#subject").css("border-color", "rgb(200, 50, 50)");
                valid = false;
            } else {
                $("#subject").css("border-color", "rgb(20, 20, 20)");
            }
            if (submissionMessage === "") {
                $("#message").css("border-color", "rgb(200, 50, 50)");
                valid = false;
            } else {
                $("#message").css("border-color", "rgb(20, 20, 20)");
            }

        if (valid) {
            var link = "mailto:prod.freo@gmail.com?subject=" + submissionSubject + "&body=" + submissionMessage + "%0D%0A%0D%0A" + submissionName;
            window.location.href = link;
            showThanks();
        }
    }); 
    showFAQ();
}

// FAQ
function showFAQ() {
/*    $.ajax({
        url: host + '/faq',
        type: 'GET',
        contentType: "application/json; charset-utf-8",

        success: function (faq) {
            for (q of faq) {
                $("#faq_container").append('<button class="accordion">' + q.question + '</button><div class="panel"><p>' + q.response + '</p></div>');
            }
        }
    }); */

    addAccordion();
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

function showAbout() {
    $(".container").html($("#view-about").html());
    scrollTop();
    $('body').css("background-image", bg_img);
}

function showBeats() {
    $(".container").html($("#view-beats").html());
    scrollTop();
    $('body').css("background-image", bg_img);
}

function showCategory(category) {
    $('#category-list').hide();
    $(".container").html($("#view-beats").html());
    scrollTop();
    $('body').css("background-image", bg_img);

    if (category=="melodic") {
        $("#beatsHeadline").replaceWith('<h2 id="beatsHeadline"> Melodic Trap </h2>');
        $("#beatsText").replaceWith('<p id="beatsText"> Emotional trap beats inspired by melodic rappers such as Juice WRLD, Iann Dior, The Kid LAROI and Internet Money. Download the tagged version of any melodic trap beat for free from my <a class="hyperlink" href="https://www.beatstars.com/playlists/4747996" target="_blank"> BeatStars page</a>. </p>');
        $("#tracklist").replaceWith('<iframe id="tracklist" src="https://player.beatstars.com/?storeId=121912" width="100%" height="800"> </iframe>');
    } else if (category=="drill") {
        $("#beatsHeadline").replaceWith('<h2 id="beatsHeadline"> Drill Beats </h2>');
        $("#beatsText").replaceWith("<p id='beatsText'> Hard hitting drums and gliding 808's! Beats inspired by the UK and NY drill scenes. Download the tagged version of any drill beat for free from my <a class='hyperlink' href='https://www.beatstars.com/playlists/4708228' target='_blank'> BeatStars page</a>. </p>");
        $("#tracklist").replaceWith('<iframe id="tracklist" src="https://player.beatstars.com/?storeId=121905" width="100%" height="800"> </iframe>');
    } else if (category=="dark") {
        $("#beatsHeadline").replaceWith('<h2 id="beatsHeadline"> Dark Trap </h2>');
        $("#beatsText").replaceWith("<p id='beatsText'> Massive 808's and dark melodies! Trap beats inspired by artists such as Travis Scott, Denzel Curry, Gunna and Kid Cudi. Download the tagged version of any trap beat for free from my <a class='hyperlink' href='https://www.beatstars.com/playlists/4739686' target='_blank'> BeatStars page</a>. </p>");
        $("#tracklist").replaceWith('<iframe id="tracklist" src="https://player.beatstars.com/?storeId=122303" width="100%" height="800"> </iframe>');
    } else if (category=="chill") {
        $("#beatsHeadline").replaceWith('<h2 id="beatsHeadline"> Chill Beats </h2>');
        $("#beatsText").replaceWith("<p id='beatsText'> Beautiful melodies over jazzy chords and off beat drums. Calm beats inspired by the lo-fi wave and artists such as Mac Miller, Isaiah Rashad and Khalid. Download the tagged version of any chill beat for free from my <a class='hyperlink' href='https://www.beatstars.com/playlists/4677583' target='_blank'> BeatStars page</a>. </p>");
        $("#tracklist").replaceWith('<iframe id="tracklist" src="https://player.beatstars.com/?storeId=123493" width="100%" height="800"> </iframe>');
    }
}



$(document).ready(function () {
    showHome();

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

    toggleNav();

    $('#home').click(function (e) {
        e.preventDefault();
        showHome();
    });

    $('#contact').click(function (e) {
        e.preventDefault();
        showContact();
    });

    $('#socials').click(function (e) {
        e.preventDefault();
        $(".container").html($("#view-socials").html());
        scrollTop();
        $('body').css("background-image", bg_img);
    });

    $('#licenses').click(function (e) {
        e.preventDefault();
        $(".container").html($("#view-licenses").html());
        scrollTop();
        $('body').css("background-image", bg_img);
        
        addAccordion();

        $("#leaseInfo").tooltip({
            'container': 'body',
            'placement': 'bottom'
        });
    });

    $('#services').click(function (e) {
        e.preventDefault();
        $(".container").html($("#view-services").html());
        scrollTop();
        $('body').css("background-image", bg_img);

        $('.contact-me').click(function (e) {
            e.preventDefault();
            showContact();
        });
    });

    $('#about').click(function (e) {
        e.preventDefault();
        showAbout();
    });

    // --------------------- BEATS -----------------------
    $('#products').click(function (e) {
        e.preventDefault();
        showBeats();
    });


    // ------------------- CATEGORIES --------------------

    $(document).on('click', '#categoryMelodic', function (e) {
        e.preventDefault();
        showCategory("melodic");
    });

    $(document).on('click', '#categoryDark', function (e) {
        e.preventDefault();
        showCategory("dark");
    });

    $(document).on('click', '#categoryDrill', function (e) {
        e.preventDefault();
        showCategory("drill");
    });

    $(document).on('click', '#categoryChill', function (e) {
        e.preventDefault();
        showCategory("chill");
    });

});