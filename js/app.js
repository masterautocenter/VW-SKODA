var score = [true, true, true];

function req(x) {
    score[x] = true;
    if (score[1] == true || score[2] == true || score[3] == true) {
        document.getElementById("feedback").required = true;
    }
}

function unreq(x) {
    score[x] = false;
    if (score[1] == false && score[2] == false && score[3] == false) {
        document.getElementById("feedback").required = false;
    }
}

function half() {
    if (document.forms["enq"]["nummerplaat"].value.length > 0 && $('input[type=radio][name=raadgever]:checked').size() > 0 && $('input[type=radio][name=enquete]:checked').size() > 0 && $('input[type=radio][name=merk]:checked').size() > 0) {
        document.getElementsByClassName("firstHalf")[0].style.display = "none";
        document.getElementsByClassName("secondHalf")[0].style.display = "inherit";
    }
}

$(document).ready(function () {
//  Check Radio-box
    $(".q1 input:radio").attr("checked", false);
    $('.q1 input').click(function () {
        $(".q1 span").removeClass('checked');
        $(this).parent().addClass('checked');
    });
});

$(document).ready(function () {
//  Check Radio-box
    $(".q2 input:radio").attr("checked", false);
    $('.q2 input').click(function () {
        $(".q2 span").removeClass('checked');
        $(this).parent().addClass('checked');
    });
});

$(document).ready(function () {
//  Check Radio-box
    $(".q3 input:radio").attr("checked", false);
    $('.q3 input').click(function () {
        $(".q3 span").removeClass('checked');
        $(this).parent().addClass('checked');
    });
});

$("form").submit(function () {
    $(":submit", this).attr("disabled", "disabled");
});