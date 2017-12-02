
const canvas = document.getElementById('pixel_canvas');
var colorInput = document.getElementById('colorPicker').value;
var table_height = document.getElementById('input_height').value;
var table_width = document.getElementById('input_width').value;

function makeGrid() {
	event.preventDefault();
	canvas.innerHTML = '';

	for (let i = 0; i < table_height; i++) {
	    let row = canvas.insertRow(i);
	    for (let j = 0; j < table_width; j++) {
	        let cell = row.insertCell(j);
	        cell.addEventListener("click", function(event) {
	           	event.target.style.backgroundColor = colorInput;
	        });  
	    }
	}
}

$('submit_button').on("click", function(event) {
	event.preventDefault();
	makeGrid();
});

$('#input_height').on('change', function(event) {
	table_height = document.getElementById('input_height').value;
	event.preventDefault();
	makeGrid();
});

$('#input_width').on('change', function(event) {
	table_width = document.getElementById('input_width').value;
	event.preventDefault();
	makeGrid();
});

$('#colorPicker').on('change', function() {
	colorInput = document.getElementById('colorPicker').value;
	//alert("colorInput " + colorInput);
});
