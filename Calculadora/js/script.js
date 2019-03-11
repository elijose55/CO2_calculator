$(document).ready(function() {
	// hide results template and error alerts on initial page load
	$("#results").hide();
	$(".alert").hide();

	// prevent ability to type negative numbers or spaces in input fields
	$("[type='number']").bind("keydown", function(e) {
		var code = e.keyCode || e.which;

		if (code == 189 || code == 173 || code == 32 || code == 69 || code == 109) {
			return false;
		}
	});

	$("#calculate-btn").on("click", function() {
		console.log("coco");
		var calculateAndDisplayScore = function() {
			window.scrollTo(0, 400);
			// hide form template if all inputs are completed
			console.log("coco");
			$("#form").hide();

			// get input values
			var tvInput = document.getElementById("tv").value;
			var pcInput = document.getElementById("pc").value;
			var acInput = document.getElementById("ac").value;
			var chuveiroInput = document.getElementById("chuveiro").value;
			var ferro_eletricoInput = document.getElementById("ferro_eletrico").value;
			var forno_eletricoInput = document.getElementById("forno_eletrico").value;
			var microondasInput = document.getElementById("microondas").value;
			var lava_loucasInput = document.getElementById("lava_loucas").value;
			var lava_roupasInput = document.getElementById("lava_roupas").value;
			var secadora_roupaInput = document.getElementById("secadora_roupa").value;
			var secadora_cabeloInput = document.getElementById("secadora_cabelo").value;
			var ventiladorInput = document.getElementById("ventilador").value;
			var geladeiraInput = document.getElementById("geladeira").value;
			var freezerInput = document.getElementById("freezer").value;
			var laptopInput = document.getElementById("laptop").value;
			var celularInput = document.getElementById("celular").value;
			var glpInput = document.getElementById("glp").value;
			var gnInput = document.getElementById("gn").value;
			var carro_gasolinaInput = document.getElementById("cgasolina").value;
			var carro_etanolInput = document.getElementById("cetanol").value;
			var carro_dieselInput = document.getElementById("cdiesel").value;
			var litro_carroInput = document.getElementById("ckml").value;
			var moto_gasolinaInput = document.getElementById("mgasolina").value;
			var litro_motoInput = document.getElementById("mkml").value;
			var onibusInput = document.getElementById("onibus").value;
			var metroInput = document.getElementById("metro").value;
			
			// set variables for calculating each component score
			var tvScore = "";
			var pcScore = "";
			var acScore = "";
			var chuveiroScore = "";
			var ferro_eletricoScore = "";
			var forno_eletricoScore = "";
			var microondasScore = "";
			var lava_loucasScore = "";
			var lava_roupasScore = "";
			var secadora_roupaScore = "";
			var ventiladorScore = "";
			var geladeiraScore = "";
			var freezerScore = "";
			var secadora_cabeloScore = "";
			var laptopScore = "";
			var celularScore = "";
			var glpScore = "";
			var gnScore = "";
			var carro_gasolinaScore = "";
			var carro_etanolScore = "";
			var carro_dieselScore = "";
			var litro_carroScore = "";
			var moto_gasolinaScore = "";
			var litro_motoScore = "";
			var onibusScore = "";
			var metroScore = "";


			var totalScore = "";


			if (tvInput === 0 || tvInput === "undefined") {
				tvScore = 0;
			} else {
				tvScore = tvInput * 200 * 0.03;
			}

			if (pcInput === 0 || pcInput === "undefined") {
				pcScore = 0;
			} else {
				pcScore = pcInput * 350 * 0.03;
			}

			if (acInput === 0 || acInput === "undefined") {
				acScore = 0;
			} else {
				acScore = acInput * 1600 * 0.03;
			}

			if (chuveiroInput === 0 || chuveiroInput === "undefined") {
				chuveiroScore = 0;
			} else {
				chuveiroScore = chuveiroInput * 5000 * 0.03;
			}

			if (ferro_eletricoInput === 0 || ferro_eletricoInput === "undefined") {
				ferro_eletricoScore = 0;
			} else {
				ferro_eletricoScore = ferro_eletricoInput * 1125 * 0.03;
			}

			if (forno_eletricoInput === 0 || forno_eletricoInput === "undefined") {
				forno_eletricoScore = 0;
			} else {
				forno_eletricoScore = forno_eletricoInput * 5000 * 0.03;
			}

			if (microondasInput === 0 || microondasInput === "undefined") {
				microondasScore = 0;
			} else {
				microondasScore = microondasInput * 1300 * 0.03;
			}

			if (lava_loucasInput === 0 || lava_loucasInput === "undefined") {
				lava_loucasScore = 0;
			} else {
				lava_loucasScore = lava_loucasInput * 2700 * 0.03;
			}

			if (lava_roupasInput === 0 || lava_roupasInput === "undefined") {
				lava_roupasScore = 0;
			} else {
				lava_roupasScore = lava_roupasInput * 1500 * 0.03;
			}

			if (secadora_roupaInput === 0 || secadora_roupaInput === "undefined") {
				secadora_roupaScore = 0;
			} else {
				secadora_roupaScore = secadora_roupaInput * 3500 * 0.03;
			}

			if (secadora_cabeloInput === 0 || secadora_cabeloInput === "undefined") {
				secadora_cabeloScore = 0;
			} else {
				secadora_cabeloScore = secadora_cabeloInput * 1300 * 0.03;
			}

			if (ventiladorInput === 0 || ventiladorInput === "undefined") {
				ventiladorScore = 0;
			} else {
				ventiladorScore = ventiladorInput * 100 * 0.03;
			}

			if (geladeiraInput === 0 || geladeiraInput === "undefined") {
				geladeiraScore = 0;
			} else {
				geladeiraScore = geladeiraInput * 350 * 24 * 0.03;
			}

			if (freezerInput === 0 || freezerInput === "undefined") {
				freezerScore = 0;
			} else {
				freezerScore = freezerInput  * 150 * 24 * 0.03;
			}

			if (laptopInput === 0 || laptopInput === "undefined") {
				laptopScore = 0;
			} else {
				laptopScore = laptopInput * 78 * 30;
			}

			if (celularInput === 0 || celularInput === "undefined") {
				celularScore = 0;
			} else {
				celularScore = celularInput * 13 * 30;
			}


			if (glpInput === 0 || glpInput === "undefined") {
				glpScore = 0;
			} else {
				glpScore = glpInput * 39.2;
			}

			if (gnInput === 0 || gnInput === "undefined") {
				gnScore = 0;
			} else {
				gnScore = gnInput * 1.799;
			}

			if (carro_gasolinaInput === 0 || carro_gasolinaInput === "undefined" || carro_gasolinaInput === "") {
				carro_gasolinaScore = 0;
			} else {
				if(litro_carroInput === 0 || litro_carroInput === "undefined" || litro_carroInput === "") {
					litro_carroScore = 10;
				}
				else {
					litro_carroScore = litro_carroInput;
				}
				carro_gasolinaScore = carro_gasolinaInput * 30 * 2.034/litro_carroScore;
			}


			if (carro_etanolInput === 0 || carro_etanolInput === "undefined" || carro_etanolInput === "") {
				carro_etanolScore = 0;
			} else {
				if(litro_carroInput === 0 || litro_carroInput === "undefined" || litro_carroInput === "") {
					litro_carroScore = 7;
				}
				else {
					litro_carroScore = litro_carroInput;
				}
				carro_etanolScore = carro_etanolInput * 30 * 1.507/litro_carroScore;
			}


			if (carro_dieselInput === 0 || carro_dieselInput === "undefined" || carro_dieselInput === "") {
				carro_dieselScore = 0;
			} else {
				if(litro_carroInput === 0 || litro_carroInput === "undefined" || litro_carroInput === "") {
					litro_carroScore = 14;
				}
				else {
					litro_carroScore = litro_carroInput;
				}
				carro_dieselScore = carro_dieselInput * 30 * 12.312/litro_carroScore;
			}


			if (moto_gasolinaInput === 0 || moto_gasolinaInput === "undefined" || moto_gasolinaInput === "") {
				moto_gasolinaScore = 0;
			} else {
				if(litro_motoInput === 0 || litro_motoInput === "undefined" || litro_motoInput === "") {
					litro_motoScore = 30;
				}
				else {
					litro_motoScore = litro_motoInput;
				}
				moto_gasolinaScore = moto_gasolinaInput * 30 * 2.034/litro_motoScore;
			}



			if (onibusInput === 0 || onibusInput === "undefined") {
				onibusScore = 0;
			} else {
				onibusScore = onibusInput * 30 * 12.312/225;
			}


			if (metroInput === 0 || metroInput === "undefined") {
				metroScore = 0;
			} else {
				metroScore = metroInput * 0.002 * 30;
			}
			


			// calculate scores for each category
			var eletricidadeScore = tvScore + pcScore + acScore + chuveiroScore + ferro_eletricoScore + forno_eletricoScore + microondasScore + lava_loucasScore + lava_roupasScore + secadora_roupaScore + ventiladorScore + geladeiraScore + freezerScore + secadora_cabeloScore + laptopScore + celularScore;
			var casaScore = glpScore + gnScore;
			var transporteScore = carro_gasolinaScore + carro_etanolScore + carro_dieselScore + moto_gasolinaScore + onibusScore + metroScore;
			console.log(eletricidadeScore);

			// calculate total score and round to nearest whole integer
			totalScore = casaScore + transporteScore + eletricidadeScore;
			var formattedScore = totalScore.toLocaleString("en");
			// console.log(totalScore);

			document.getElementById("score").innerHTML = formattedScore;

			// display results
			$("#results").show();

			// refresh page when recalculate button clicked
			$("#recalculate-btn").on("click", function() {
				location.reload();
				window.scrollTo(0, 0);
			});
		}
		calculateAndDisplayScore();
	});	
});