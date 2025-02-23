
function sayHello(){
    alert('Hello World from function ')
}

function somme (a,b){

    return a+b;
}

function sum (...values){

    let sum=0;


    for (const element of values) {
        sum+=element;
    }

    return sum;
}


let resultat = sum(12,34,0,1,1,34);



function sumValue(values,k=1,k2){
    let sum=0;
    for (const element of values) {
        sum+=element
    }

    return sum*k;
}


resultat=sumValue([1,2,34,45]);

// console.log(resultat);


function cumpute(a,b,operation){


    return operation(a,b);

}

// console.log(cumpute(12,34,somme));

function divide(a,b){

    if (b!=0) {
        
        return a/b;
    }

    return null;
}

console.log(cumpute(2,2,function(x,y){
    
    if (y!=0) {
        
        return x/y;
    }

    return null;
}));








