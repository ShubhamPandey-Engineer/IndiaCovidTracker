function mypre(){

	var b =document.getElementById("pre");
setTimeout(function(){
		b.style.display="none";

}
		,1000)
}

/*Scroll to top when arrow up clicked BEGIN*/
$(window).scroll(function() {
    var height = $(window).scrollTop();
    if (height > 100) {
        $('#back2Top').fadeIn();
    } else {
        $('#back2Top').fadeOut();
    }
});
$(document).ready(function() {
    $("#back2Top").click(function(event) {
        event.preventDefault();
        $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
    });

});
 /*Scroll to top when arrow up clicked END*/



setTimeout(function myModal(){
var modal =document.querySelector(".mymodal");
modal.style.display="block";
modal.style.position="fixed";


}, 5000);



$($(document).ready(function() {
$(".easy").click(function(){
	$(".easy").toggleClass('changeread');
	$("section").toggleClass('ch');
	
});




$(".closemodal").click(function(){
	$(".mymodal").slideUp('fast');
	
})





	/*$("#b1").click(function(event) {
$(".content1").slideToggle('slow')
	});

	$("#b2").click(function(event) {
$(".content2").slideToggle('slow');
	});

	$("#b3").click(function(event) {
$(".content3").slideToggle('slow');
	});



		$("#cancelb1").click(function(event) {
$(".content1").slideUp('200');
});
	$("#cancelb2").click(function(event) {
$(".content2").slideUp('200');
});
	$("#cancelb3").click(function(event) {
$(".content3").slideUp('200');
	});*/

}));