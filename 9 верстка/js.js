const anchors = document.querySelectorAll('a[href*="#"]')
for (let anchor of anchors){
anchor.addEventListener("click",function(event) {
    event.preventDefault();
    const blockID = anchor.getAttribute ('href')
    document.querySelector('' + blockID).scrollIntoView({
        behavior: "smooth",
        block: "start"
    })
 })
}

$('.mobile-nav').hide();
$('.burger').on('click',function(){
    $('.mobile-nav').slideToggle(800);
})


$(function(){
    $('.sliderr').slick({
        arrows: false,
        fade: true,
        autoplay: 3000
    });
});







