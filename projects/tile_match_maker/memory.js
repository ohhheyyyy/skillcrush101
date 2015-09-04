/************************
 *
 *		Show / Hide Button
 *
 *************************/

var showButton = document.getElementById("showInstructions");
var hideButton = document.getElementById("hideInstructions");

var instructions = document.getElementById("instructions");

function showModal() {
    instructions.style.display = 'block';
    showButton.style.display = 'none';

}

// this function hides the instructions
function hideModal() {
    instructions.style.display = 'none';
    showButton.style.display = 'inline';
}

// when the buttons are clicked, call functions by name
showButton.onclick = showModal;
hideButton.onclick = hideModal;

/************************
 *
 *		Gameboard
 *
 *************************/


var tileArray = ['A','A','B','B','C','C','D','D','E','E','F','F','G','G','H','H','I','I','J','J','K','K','L','L','M','M','N','N','O','O'];
var tileValues = [];
var tileIds = [];
var tilesFlipped = 0;
Array.prototype.tileShuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
};
function brandNewBoard(){
	tilesFlipped = 0;
	var output = '';
    tileArray.tileShuffle();
	for(var i = 0; i < tileArray.length; i++){
		output += '<div id="tile_'+i+'" onclick="flipDatTile(this,\''+tileArray[i]+'\')"></div>';
	}
	document.getElementById('memoryGameBoard').innerHTML = output;
}
function flipDatTile(tile,val){
	if(tile.innerHTML === "" && tileValues.length < 2){
		tile.style.background = '#F62459';
		tile.innerHTML = val;
		if(tileValues.length === 0){
			tileValues.push(val);
			tileIds.push(tile.id);
		} else if(tileValues.length == 1){
			tileValues.push(val);
			tileIds.push(tile.id);
			if(tileValues[0] == tileValues[1]){
				tilesFlipped += 2;
				// Clear both arrays
				tileValues = [];
            	tileIds = [];
				// Check to see if the whole board is cleared
				if(tilesFlipped == tileArray.length){
					alert("BOOM! BOARD CLEARED. YOU WON!<br />Let's play again.");
					document.getElementById('memoryGameBoard').innerHTML = "";
					brandNewBoard();
				}
			} else {
				function flip2Back(){
				    // Flip the 2 tiles back over
				    var tile_1 = document.getElementById(tileIds[0]);
				    var tile_2 = document.getElementById(tileIds[1]);
				    tile_1.style.background = 'url(./images/tiles.jpg)';
            	    tile_1.innerHTML = "";
				    tile_2.style.background = 'url(./images/tiles.jpg)';
            	    tile_2.innerHTML = "";
				    // Clear both arrays
				    tileValues = [];
            	    tileIds = [];
				}
				setTimeout(flip2Back, 700);
			}
		}
	}


// var tileArray = ['A', 'A', 'B', 'B', 'C', 'C', 'D', 'D', 'E', 'E', 'F', 'F', 'G', 'G', 'H', 'H', 'I', 'I', 'J', 'J', 'K', 'K', 'L', 'L'];
// var tileValues = [];
// var tileIds = [];
// var tilesFlipped = 0;


// // Board shuffle array function
// Array.prototype.tileShuffle = function() {
//     var i = this.length,
//         j, temp;
//     while (--i > 0) {
//         j = Math.floor(Math.random() * (i + 1));
//         temp = this[j];
//         this[j] = this[i];
//         this[i] = temp;
//     }
// };

// // Generate new board function 
// function newBoard() {
//     tilesFlipped = 0;
//     var output = '';
//     tileArray.tileShuffle();
//     for (var i = 0; i < tileArray.length; i++) {
//         output += '<div id="tile_' + i + '" onclick="flipDatTile(this,\'' + tileArray[i] + '\')"></div>';
//     }
//     document.getElementById("memoryGameBoard").innerHTML = output;
// }

// // Flip tile function
// function flipDatTile(tile, val) {
//     if (tile.innerHTML === "" && tileValues < 2) {
//         tile.style.background = '#F62459';
//         tile.innerHTML = val;
//         if (tileValues.length === 0) {
//             tileValues.push(val);
//             tileIds.push(tile.id);
//         } else if (tileValues.length == 1) {
//             tileValues.push(val);
//             tileIds.push(tile.id);
//             if (tileValues[0] == tileValues[1]) {
//                 tilesFlipped += 2;
//                 // clear the arrays
//                 tileValues = [];
//                 tileIds = [];
//                 // is the whole board cleared? let's check
//                 if (tilesFlipped === tileArray.length) {
//                     alert("BOOM! BOARD CLEARED. YOU WON!<br />Let's play again.");
//                     document.getElementById("memoryGameBoard").innerHTML = "";
//                     newBoard();
//                 } else {
//                     function flip2Back() {
//                         // Flip the 2 tiles back over
//                         var tile_1 = document.getElementById(tileIds[0]);
//                         var tile_2 = document.getElementById(tileIds[1]);
//                         tile_1.style.background = 'url(tiles.jpg) no-repeat';
//                         tile_1.innerHTML = "";
//                         tile_2.style.background = 'url(tiles.jpg) no-repeat';
//                         tile_2.innerHTML = "";
//                         // clear the arrays
//                         tileValues = [];
//                         tileIds = [];
//                     }
//                     setTimeout(flip2Back, 700);
//                 }
//             }
//         }
//     }
}
