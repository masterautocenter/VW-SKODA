const scriptURL = 'https://script.google.com/macros/s/AKfycbzT6UG1sbkMMVo0MAn5WWYps_tnEI2JoRB_XjJIFmEB9KkmRWQz/exec'  
                  const form = document.forms['enq']  
                  form.addEventListener('submit', e => {  
                   e.preventDefault()  
                   fetch(scriptURL, { method: 'POST', body: new FormData(form)})  
                    .then(response => window.location.href = 'endEn.html')  
                    .catch(error => console.error('Error!', error.message))
                      console.log("test");
                  })  



$(document).ready(function(){
//  Check Radio-box
    $(".q1 input:radio").attr("checked", false);
    $('.q1 input').click(function () {
        $(".q1 span").removeClass('checked');
        $(this).parent().addClass('checked');
    });
});

$(document).ready(function(){
//  Check Radio-box
    $(".q2 input:radio").attr("checked", false);
    $('.q2 input').click(function () {
        $(".q2 span").removeClass('checked');
        $(this).parent().addClass('checked');
    });
});

$(document).ready(function(){
//  Check Radio-box
    $(".q3 input:radio").attr("checked", false);
    $('.q3 input').click(function () {
        $(".q3 span").removeClass('checked');
        $(this).parent().addClass('checked');
    });
});
function half(){
   if (document.forms["enq"]["nummerplaat"].value.length > 0 && $('input[type=radio][name=raadgever]:checked').size() > 0 && $('input[type=radio][name=enquete]:checked').size() > 0 && $('input[type=radio][name=merk]:checked').size() > 0){
       document.getElementById("firstHalf").style.display="none"
    document.getElementById("secondHalf").style.display="inherit"}
}

$("form").submit(function() {
   $(":submit", this).attr("disabled", "disabled");
});