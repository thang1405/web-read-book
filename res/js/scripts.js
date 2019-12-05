$(document).ready(
    function(){
        //scroll
        $('a').click(function(event){
            $('html,body').animate({
                scrollTop:$($.attr(this,'href') ).offset().top
            }, 600);
            event.preventDefault();
        })
        //sticky nav
    }
)
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
}, 2000);