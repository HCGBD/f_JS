
// 1
let questions=[
    { 
        question:"Quel est la capitale de la Guinnée ? ",
        reponse:["Kankan","Conakry","Mamou","Labe"],
        bnReponse:1

    },
    { 
        question:"Quel est la devise de la Guinnée ? ",
        reponse:["Travail-Argent-Liberte","Solidarite-Travail-Justice","Fraternite-Travail-Paix","Travail-Justice-Solidarite"],
        bnReponse:3

    },
    { 
        question:"Quel est le nom de l'hynme nationale de la Guinnée ? ",
        reponse:["Paix","Solidarite","Liberte","Courage"],
        bnReponse:2

    }
]



// 2

for (let i = 0; i < questions.length; i++) {

    let ques=questions[i].question;
    let bRep=questions[i].reponse;
    ques+="\n";
    for (let j = 0; j <bRep.length; j++) {
        ques+="\n"+(j+1)+"."+bRep[j]+""
        
    }

    ques+="\n \n";
    let rep=  prompt(ques);
    rep=rep-1;

    if (rep!==questions[i].bnReponse) {
        
        alert("Pas de chance c'es pas la bonne reponse");
    }
    else{
        alert("Bravo !!!! c'est ca ")
    }
    
}
