//Digite seu CPF abaixo:
//
//
//
//
//
const CPF = "492.627.070-61";
//
//
//
//
//
//

//Regex
const regex1 = /\d{3}\.\d{3}.\d{3}\-\d{2}/g;
const regex2 = /\d{11}/g;
const regex3 = /[.-]/g;

//Função de validação do CPF
const validateNumberCPF = () => {
	if (!CPF.match(regex1) && !CPF.match(regex2))
		return console.log(`O CPF ${CPF} é inválido!!!`);

	let formattedCPF = "";
	let simpleCPF = "";

	if (CPF.match(regex1)) {
		formattedCPF = CPF;
		simpleCPF = CPF.replace(regex3, "");
	} else if (CPF.match(regex2)) {
		simpleCPF = CPF;
		formattedCPF =
			CPF.substring(0, 3) +
			"." +
			CPF.substring(3, 6) +
			"." +
			CPF.substring(6, 9) +
			"-" +
			CPF.substring(9);
	}

	let firstSum: number = 0;
	let secondSum: number = 0;
	for (var i = 1; i <= 9; i++) {
		const firstValidate = parseInt(simpleCPF.substring(i - 1, i));
		const secondValidate = parseInt(simpleCPF.substring(i, i + 1));
		const multiplier = 11 - i;
		const firstMulti = firstValidate * multiplier;
		const secondMulti = secondValidate * multiplier;
		firstSum += firstMulti;
		secondSum += secondMulti;
	}
	const firstRest = firstSum % 11;
	let firstDV: number;
	if (firstRest < 2) {
		firstDV = 0;
	} else {
		firstDV = 11 - firstRest;
	}

	const secondRest = secondSum % 11;
	let secondDV: number;
	secondDV = 11 - secondRest;

	const DV = firstDV.toString() + secondDV.toString();

	if (DV === simpleCPF.substring(9)) {
		console.log(`O CPF ${formattedCPF} foi validado com sucesso!!!`);
	} else {
		console.log(`O CPF ${formattedCPF} não existe!!!`);
	}
};

validateNumberCPF();
