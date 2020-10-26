$(document).ready(function(){
    //jquerySelector

    $("p").hide(); //cache les élément p
    $("#id").hide() //cache les id
    $(".class").hide() //cache les classes
    $("*").hide() //cache tous les éléments du documents
    $("[href]").hide() //cache tous les éléments qui ont href comme attributs

    //jqueryEvent

    //cache les p lorsqu'on clique dessus
    $("p").click(function(){
        $(this).hide();
    });

    //cache les p lorsqu'on double clique dessus
    $("p").dblclick(function(){
        $(this).hide();
    });

    //cache les p lorsqu'on passe la souris dessus
    $("p").mouseenter(function(){
        $(this).hide();
    });

    //cache les p lorsqu'on appuis dessus
    $("p").keypress(function(){
        $(this).hide();
    });

    //cache tous les p lorsqu'on clique dessus
    $("p").on("click", function(){
        $(this).hide();
    });

    //jquery Hide and slow

    //cache les p lorsqu'on clique dessus, la vitesse sera lente
    $("p").click(function(){
        $(this).hide("slow");
    });

    //cette méthode sert à montrer les p lorsqu'on clique dessus
    $("p").click(function(){
        $(this).hide("slow");
    });

    
    $("p").click(function(){
        $(this).toggle("slow");
    });

    //Jquery fade

    $("div").fadeOut() //fait disparaitre les div
   
    $("div").fadeOut("slow") //fait disparaitre les div lentement

    $("div").fadeTo("slow", 0.2) //fait palir les div avec une opacité de 0.2

    $("div").fadeToggle(1000);

    //Jquery slide

    $("div").slideUp(); // fait glisser ver le haut
    $("div").slideUp("slow"); // fait glisser ver le haut lentement
    $("div").slideDown(); // fait glisser vers le bas

    $("button").click(function(){
        $("div").slideToggle();

    })

    //jQuery animate

    $("div").animate({left: '250px'}); // Déplace de  250 pixel vers la gauche

    $("div").animate({height: '500px'});

    $("div").animate({
  
        opacity
        : '0.4',
          
        height
        : '500px',
          
        width
        : '500px'
    });

    $("div").animate({
        fontSize
        : '100px'
    }, "slow");


    //jquery stop

    $("div").stop(); // arrete une animation


    $("div").text(); // retourne le contenu du div

    $("div").html(); // retourne le contenu html du div

    $("input").val(); //retourne la valeur d'un input

    $("a").attr(); //retourne l'url d'une addresse

    $("p").append("YES!"); //Insert yes à la fin d'un p

    $("p").prepend("YES!"); //Insert yes au début d'un p

    $("div").remove(); //enléve un élément div

    $("div").empty(); //enléve un enfant de div

    $("img").attr("src", "img/cielg.jpg"); //change une image

    $("span").parent(); // montre le parent du span

    $("span").parents(); // montre les ancêtre du span
    
    $("span").children(); // montre l'enfant du span

    $("div").find(); // montre les descendant du div

    $("h2").siblings();

    $("div").first(); // montre le premier div














})