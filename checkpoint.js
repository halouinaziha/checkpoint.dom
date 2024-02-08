let addButtons = Array.from(document.querySelectorAll("#add-button"));
let minusButtons = Array.from(document.querySelectorAll("#minus-button"));
let quantitys = Array.from(document.querySelectorAll("#quantity"));
let prices = Array.from(document.querySelectorAll("#price"));
let deletes = Array.from(document.querySelectorAll("#delete"));
let parents = Array.from(document.querySelectorAll("#parent"));



let arrOfQuantitys = [];
let arrOfPrices = [];
for(let i in quantitys){
    arrOfQuantitys[i] = 1 ;
}
for(let i in prices ){
    arrOfPrices[i] = +prices[i].innerHTML;
}

function updateTotal(){
    let total = 0 ;
    for(let i in quantitys)
    total += arrOfPrices[i]*arrOfQuantitys[i];
    document.getElementById('totale-price').textContent=`TOTALE PRICE : ${total} TND`;

}
updateTotal();



for(let i in addButtons){
    addButtons[i].addEventListener("click",function(){
        arrOfQuantitys[i]++;
        quantitys[i].innerHTML = arrOfQuantitys[i];
        updateTotal();
    });
}

for(let i in minusButtons){
    minusButtons[i].addEventListener("click",function(){
        if(arrOfQuantitys[i] > 1){
            arrOfQuantitys[i]--;
            quantitys[i].innerHTML = arrOfQuantitys[i];
            updateTotal();
        }
    });
}


for(let i in deletes){
    deletes[i].addEventListener("click",function(){
        arrOfQuantitys[i] = 0;
        updateTotal();
        parents[i].remove();
    });
}

