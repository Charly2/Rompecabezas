//Crea el puzzle

var arrayBgPos  = [];
arrayBgPos[0] = "0";
arrayBgPos[1] = "0 0";
arrayBgPos[2] = "140px 0";
arrayBgPos[3] = "70px 0";
arrayBgPos[4] = "0 140px";
arrayBgPos[5] = "140px 140px";
arrayBgPos[6] = "70px 140px";
arrayBgPos[7] = "0 70px";
arrayBgPos[8] = "140px 70px";

var arrCell = [0,1,2,3,4,5,6,7,8];
var arrShuffle = shuffle(arrCell);
var counter = 0;

var game = document.querySelector("#game");
game.innerHTML = "";

for(var i = 0; i < 3; i++){
    var row = '<div class="row">';
    for(var j = 0; j < 3; j++){

        
        if(arrShuffle[counter] != 0)
            row += '<div class="cell" data-num="'+arrShuffle[counter]+'" data-pos="'+i+','+j+'" style="background-position:'+arrayBgPos[arrShuffle[counter]]+'"><span>'+arrShuffle[counter]+'</span></div>';
        else 
            row += '<div class="cell empty" id="empty" data-num="'+arrShuffle[counter]+'" data-pos="'+i+','+j+'"><span></span></div>';
        counter++;
    }
    row += '</div>';
    game.innerHTML += row;
}


function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i--) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
    return a;
}