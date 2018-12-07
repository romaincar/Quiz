//*Tableau des questions*//
tabquestion = [

    {
        "question": "Dans quel film John Kramer apparait'il ?",
        "bonnereponse": 2
    },

    {
        "question": "Dans le film Sinister comment s'appelle la créature mythique que l'on voit sur les vidéos ?",
        "bonnereponse": 1

    },


    {
        "question": "Dans quel film d'horreur peut-on retrouver Emilie de Ravin ?",
        "bonnereponse": 1

    },

    {
        "question": "Qui a réalisé le film d'horreur 'Piranhas 3d' en 2010 ?",
        "bonnereponse": 2


    },

    {
        "question": "A partir de quel opus de la saga 'Vendredi 13' le méchant (Jason) porte-t-il son masque de hockey ?",
        "bonnereponse": 1


    },

    {
        "question": "A quelle main Freddy porte-t-il son gant griffu ?",
        "bonnereponse": 2


    },

    {
        "question": "Quel film espagnol, filmé à la caméra ordinaire, raconte l'histoire de gens enfermés dans un immeuble avec des zombies ? ?",
        "bonnereponse": 2

    },

    {
        "question": "Pour ses 6 ans le petit Andy y reçut un cadeau bien dangereux ?",
        "bonnereponse": 2

    },

    {
        "question": "Un enfant échappe à la surveillance d'un camp de vacances et se noie ?",
        "bonnereponse": 2

    },

    {
        "question": "Comment s'appelle le frère de Daryl, dans the walking dead ?",
        "bonnereponse": 2

    },

];

//*Tableau des réponses*//
tabreponse = [

    {
        "reponse": "Scream",
        "reponse1": "Saw",
        "reponse2": "Shining",
        "correct": "Saw",
    },

    {
        "reponse": "Bagul",
        "reponse1": "Magul",
        "reponse2": "Tagul",
        "correct": "Bagul",
    },

    {
        "reponse": "La colline a des yeux",
        "reponse1": "Carrie",
        "reponse2": "Détour mortel 2",
        "correct": "La colline a des yeux",
    },

    {
        "reponse": "Rob Zombie",
        "reponse1": "Alexandre Aja",
        "reponse2": "Wes Craven",
        "correct": "Alexandre Aja",
    },

    {
        "reponse": "Le troisième",
        "reponse1": "Le deuxième",
        "reponse2": "Il le porte toujours",
        "correct": "Le troisième",
    },

    {
        "reponse": "Gauche",
        "reponse1": "Droite",
        "reponse2": "Aux deux",
        "correct": "Droite",
    },

    {
        "reponse": "Les yeux de Julia",
        "reponse1": "Rec",
        "reponse2": "En quarantaine",
        "correct": "Rec",
    },

    {
        "reponse": "666 La malediction",
        "reponse1": "Chucky Jeu d'enfant",
        "reponse2": "La malediction IV l'éveil",
        "correct": "Chucky Jeu d'enfant",
    },

    {
        "reponse": "Halloween",
        "reponse1": "Vendredi 13",
        "reponse2": "Freddy les griffes de la nuit",
        "correct": "Vendredi 13",
    },

    {
        "reponse": "Moineau Dixon",
        "reponse1": "Merle Dixon",
        "reponse2": "Merlin Dixon",
        "correct": "Merle Dixon",
    },

];
var ques = 0;
var reponses;

$("#question").html(tabquestion[ques].question);
$("#reponse1").html(tabreponse[ques].reponse);
$("#reponse2").html(tabreponse[ques].reponse1);
$("#reponse3").html(tabreponse[ques].reponse2);

//*Affichage des couleurs et blocage pour passer a la question suivantes sans un click*//
if ($("#reponse1").css({"backgroundColor":""})&& $("#reponse2").css({"backgroundColor":""})&& $("#reponse3").css({"backgroundColor":""})){
    document.getElementById("valide").disabled=true;
}


$("#reponse1 , #reponse2 , #reponse3").click(function () {

    if ($("#reponse1").css({"backgroundColor":"rebeccapurple"})|| $("#reponse2").css({"backgroundColor":"rebeccapurple"})|| $("#reponse3").css({"backgroundColor":"rebeccapurple"})){
        document.getElementById("valide").disabled=false;
    }
//*conditions pour designer la bonne réponses de facon numerique dans le tableau d'objet question*//
    if (this.id === "reponse1") {
        reponses = 1;

    }

    if (this.id === "reponse2") {
        reponses = 2;

    }

    if (this.id === "reponse3") {

        reponses = 3;
    }

    if ($("#reponse1").css({"backgroundColor": "rebeccapurple"}) && $("#reponse2").css({"backgroundColor": ""})) {
        document.getElementById("reponse1").style.backgroundColor = "";
    }

    if ($("#reponse2").css({"backgroundColor": "rebeccapurple"}) && $("#reponse1").css({"backgroundColor": ""})) {
        document.getElementById("reponse2").style.backgroundColor = "";
    }

    if ($("#reponse3").css({"backgroundColor": "rebeccapurple"}) && $("#reponse1").css({"backgroundColor": ""})) {
        document.getElementById("reponse3").style.backgroundColor = "";
    }
    $(this).css({"backgroundColor": "rebeccapurple"});


});

var bonnereponses = 0;
var nmbrequestion = 0;

$("#reponse1").html(tabreponse[ques].reponse);
$("#reponse2").html(tabreponse[ques].reponse1);
$("#reponse3").html(tabreponse[ques].reponse2);
//*Affichage des mauvaises réponses*//
$("#valide").click(function () {

    nmbrequestion++;
    console.log(nmbrequestion);
    if ($("#reponse1").css({"backgroundColor":""})&& $("#reponse2").css({"backgroundColor":""})&& $("#reponse3").css({"backgroundColor":""})){
        document.getElementById("valide").disabled=true;
    }

    document.getElementById("reponse1").style.backgroundColor = "";
    document.getElementById("reponse2").style.backgroundColor = "";
    document.getElementById("reponse3").style.backgroundColor = "";


    if (tabquestion[ques].bonnereponse === reponses) {
        bonnereponses++;
        console.log(bonnereponses);

    }

    else
    {
        $("#mauvaiserep").append("<li>la réponse a la question :"+" "+ tabquestion[ques].question+" "+"etait"+" "+tabreponse[ques].correct +"</li>");
    }











//*Affichage de la page partie terminé et la condition pour la selection de la question et des réponses*//
    if(nmbrequestion > 9){
        $("#global").toggle(3000);
        document.getElementById("partieterminer").style.display="block";
        document.getElementById("score").innerHTML= bonnereponses+"/10 "+"Réponse correct";
    }

else {
        ques++;
        console.log(ques);
        $("#reponse1").html(tabreponse[ques].reponse);
        $("#reponse2").html(tabreponse[ques].reponse1);
        $("#reponse3").html(tabreponse[ques].reponse2);
        $("#question").html(tabquestion[ques].question);
    }

});

function resett() {

    location.reload();

}

//*compte a rebours*//
var secondes = document.getElementById("secondes");
var minutes = document.getElementById("minutes");
var s = 59;
var m = 2;
var temps;


var countDown = function () {

    clearTimeout(temps);

    temps = setTimeout(countDown, 1000);

    if (s > 0) {
        secondes.innerHTML = (s = s - 1);
    }
    minutes.innerHTML = m;


    if (s == 0) {


        if (m > 0) {
            minutes.innerHTML = (m = m - 1);
            s = 59;
        }
        secondes.innerHTML = s;
    }
    if (s === 0 && m === 0) {
        document.getElementById("partieterminer").style.display = "inline-block";
        document.getElementById("global").style.display = "none";

    }
};



countDown();
