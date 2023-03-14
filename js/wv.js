function check() {
    if (
        document.forms[0].elements[0].checked == true &&
        document.forms[0].elements[1].checked == true &&
        document.forms[0].elements[2].checked == true
    ) {
        if (!$(".wrapper").hasClass("throb")) {
            // Do things on Nav Close
            $(".wrapper").addClass("throb");
        }
    } else {
        if ($(".wrapper").hasClass("throb")) {
            // Do things on Nav Close
            $(".wrapper").removeClass("throb");
        }
    }
}


function check1() {
    if (
        document.forms[0].elements[0].checked == true &&
        document.forms[0].elements[1].checked == true &&
        document.forms[0].elements[2].checked == true
    ) {
        if (!$(".wrapper").hasClass("throb")) {
            // Do things on Nav Close
            $(".wrapper").addClass("throb");
        }
    } else {
        if ($(".wrapper").hasClass("throb")) {
            // Do things on Nav Close
            $(".wrapper").removeClass("throb");
        }
    }
}


