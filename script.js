document.addEventListener("DOMContentLoaded", () => {
	"use strict";
//-------------------------code-------------------------
//First is always variable defining inputs and outputs.
	//Input/output, buttons and screen
	let scn = document.querySelector("#screen");
	let operandsNode = document.querySelectorAll(".operandKey")
	let operands = []
	operandsNode.forEach(el => operands.push(el.innerText))
	//Global Variables.
	let tempInNum = [];
	let numerator = [];
	let denominator = [];
	let sign = "";
	//flags
	let dtErrF = true;
	let opErrF = true;
	let to2dqF = true;
	let sndQnt = 0;
	let exNumF = false;
	let btn = document.querySelectorAll('button');

	btn.forEach(function(element) {
		let numElement = parseInt(element.innerText);
		let strElement = element.innerText;
		if (isNaN(numElement)) {
			if (operands.includes(strElement)) {
				element.addEventListener("click", e => {
					if (exNumF) {
						sign = element.innerText;
						signBtn ();
						dtErrF = true;
					}
				});
			}
		} else {
			element.addEventListener("click", e => {
				tempInNum.push(element.innerText);
				scnDsp();
				console.log('temp: ', tempInNum);
				console.log('num: ', numerator);
				console.log('den: ', denominator);
			});
		}
	});

	//Button accions

	dt.addEventListener("click", e => {
		if (dtErrF) {
			if (exNumF==false || to2dqF==false && sndQnt<2) tempInNum.push('0.');
			else tempInNum.push('.');
			scnDsp();
			dtErrF = false;
		}
		else scn.innerText = "NO Fooling around!!";
	});
	//Action for Operation buttons

	eql.addEventListener("click", e => {
		if (exNumF) operation();
		else scn.innerText = "WUpseee!! No argument yet";
	});
	//Normal Output
	function scnDsp () {
		if (to2dqF) {
			if (numerator.length < 6){ //21 tops
			numerator = tempInNum.join("");
			scn.innerText = numerator;
			exNumF = true;
			}
			else scn.innerText = "Sorry, calculator not so pro. Refresh";
		}
		else {
			if (denominator.length < 6){
				denominator = tempInNum.join("");
				scn.innerText = numerator + sign + denominator;
				sndQnt++;
			}
			else scn.innerText = "Sorry, calculator not so pro. Refresh";
		}
	}
	//sign btn operation
	function signBtn () {
		to2dqF = false;//to work now on 2nd quantity.
		if (opErrF) {
			tempInNum = [];
			scnDsp();
			opErrF = false;//so they don't hit same btn again.
		}
		else scn.innerText = "NO Fooling around!!";
	}
	//Operation
	function operation () {
		denominator = tempInNum.join("");
		switch(sign){
			case "/":
				scn.innerText = parseFloat(numerator) / parseFloat(denominator);
				break;
			case "*":
				scn.innerText = parseFloat(numerator) * parseFloat(denominator);
				break;
			case "-":
				scn.innerText = parseFloat(numerator) - parseFloat(denominator);
				break;
			case "+":
				scn.innerText = parseFloat(numerator) + parseFloat(denominator);
				break;
			case "":
				scnDsp();
			default:
				break;
		}
		//reset to make a new operation
		tempInNum = [];
		numerator = [];
		denominator = [];
		sign = "";
		dtErrF = true;
		opErrF = true;
		to2dqF = true;
		exNumF = false;
		sndQnt = 0;
	}

/*If more complex eventually, must reset:
numerator, denominator, sign and flags.*/
//Note: after 15 digits the number is changed.
//-------------------------done-------------------------
});
