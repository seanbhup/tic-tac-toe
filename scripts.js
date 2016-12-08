// 1. Set up board.
// 2. User should be able to click a box and a mark shows up.
// -- put an onclick in the first square
// -- when user clicks, call function that puts an X in the box.
// MILESTONE

function markSquare(square){
	// console.log(square.id);
	document.getElementById(square.id).innerHTML = "X"
}
