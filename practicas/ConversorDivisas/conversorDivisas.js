window.onload = function(){

	var inputs = document.querySelectorAll("input[type='number'");
	var checks = document.querySelectorAll("input[type='checkbox']");
	var convert_button = document.querySelector("#convert");
	var clear_button = document.querySelector("#clear");

	console.log(inputs);
	console.log(checks);

	// Set toggle behaviour on checkboxes
	for(var i=0 ; i<checks.length ; i++){
		checks[i].addEventListener("click", function(){
			console.log(checks);
			var index = Array.prototype.indexOf.call(checks, this);
			inputs[index].disabled = ! inputs[index].disabled;
			if(inputs[index].disabled){
				inputs[index].value = "";
			}
		},false);
	}

	// When an input changes, makes sure all others are wiped
	inputs.forEach(function(e){
		e.onchange = function(){
			assertOnlyFilled(this);
			assertNonNegative(this);
		}
	});


	// Check only elem has value
	function assertOnlyFilled(elem){
		for (var i = 0 ; i < inputs.length; i++) {
		 	if(inputs[i] != elem){
		 		inputs[i].value = "";
		 	}
		}
	}

	function assertNonNegative(elem){
		elem.value = (elem.value >= 0) ? elem.value : "";
	}

	// Get the value to be converted
	function getSourceValue(){
		var val;
		inputs.forEach(function(i){
			if(i.value != ""){
				val = i.value;
			}
		});
		return val;
	}

	// Convert button action
	convert_button.onclick = function(){
		var sourceValue = getSourceValue();
		console.log(">>"+sourceValue);
		for (var i = 0; i < inputs.length; i++) {
			if(checks[i].checked && inputs[i].value == ""){
				// Temp factor = 2
				// MAKE THE REAL CONVERSION HERE
				inputs[i].value = 2 * sourceValue;
			}
		}
		
	};

	// Clear button action
	clear_button.onclick = function(){
		inputs.forEach(function(e){
			e.value = "";
		});
	}
}
