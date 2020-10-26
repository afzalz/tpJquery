$(document).ready(function(){
    const card = $('.card');
    const photo = $('.photo');
    let marginLeft = 0;
    card.on('click', function(e){
        $($(e.target)).fadeToggle(1000);
    })

    photo.on('click', function(){
        $("img").attr("src", "img/cielg.jpg");
    })

    photo.on('mouseenter', function(){
        $("img").attr("src", "img/cielb.jpg");
    })


    console.log(card);
})