document.addEventListener("DOMContentLoaded", () => {
	"use strict";
//-------------------------code-------------------------
//First is always variable defining inputs and outputs.
	//Input/output, buttons and screen
	let b9 = document.querySelector("#b9");
	let b8 = document.querySelector("#b8");
	let b7 = document.querySelector("#b7");
	let b6 = document.querySelector("#b6");
	let b5 = document.querySelector("#b5");
	let b4 = document.querySelector("#b4");
	let b3 = document.querySelector("#b3");
	let b2 = document.querySelector("#b2");
	let b1 = document.querySelector("#b1");
	let b0 = document.querySelector("#b0");
	let dt = document.querySelector("#dt");
	let etr = document.querySelector("#etr");
	let tms = document.querySelector("#tms");
	let mns = document.querySelector("#mns");
	let pls = document.querySelector("#pls");
	let eql = document.querySelector("#eql");
	let scn = document.querySelector("#screen");
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

	//Button accions
	b9.addEventListener("click", e => {
		tempInNum.push(9);
		scnDsp();
	});
	b8.addEventListener("click", e => {
		tempInNum.push(8);
		scnDsp();
	});
	b7.addEventListener("click", e => {
		tempInNum.push(7);
		scnDsp();
	});
	b6.addEventListener("click", e => {
		tempInNum.push(6);
		scnDsp();
	});
	b5.addEventListener("click", e => {
		tempInNum.push(5);
		scnDsp();
	});
	b4.addEventListener("click", e => {
		tempInNum.push(4);
		scnDsp();
	});
	b3.addEventListener("click", e => {
		tempInNum.push(3);
		scnDsp();
	});
	b2.addEventListener("click", e => {
		tempInNum.push(2);
		scnDsp();
	});
	b1.addEventListener("click", e => {
		tempInNum.push(1);
		scnDsp();
	});
	b0.addEventListener("click", e => {
		tempInNum.push(0);
		scnDsp();
	});
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
	etr.addEventListener("click", e => {
		if (exNumF) {
			sign = "/";
			signBtn ();
			dtErrF = true;
		}
	});
	tms.addEventListener("click", e => {
		if (exNumF) {
			sign = "*";
			signBtn ();
			dtErrF = true;
		}
	});
	mns.addEventListener("click", e => {
		if (exNumF) {
			sign = "-";
			signBtn ();
			dtErrF = true;
		}
	});
	pls.addEventListener("click", e => {
		if (exNumF) {
			sign = "+";
			signBtn ();
			dtErrF = true;	
		}
	});
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