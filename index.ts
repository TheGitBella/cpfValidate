// //Digite seu CPF (somente números):
const CPF = "401.737.650-92";

//regex
//const regex = /(\d{3}\.\d{3}.\d{3}\-\d{2})|(\d{11})/g;
const regex1 = /\d{3}\.\d{3}.\d{3}\-\d{2}/g;
const regex2 = /\d{11}/g;

const validateNumberCPF = () => {
	if (!CPF.match(regex1) && !CPF.match(regex2)) {
		console.log(`O CPF ${CPF} é inválido!!!`);
	} else {
		/* 	if (CPF.match(regex1)) {
		let abc = CPF.replace(".", "");
		let bcd = abc.replace(".", "");
		let cde = bcd.replace(".", "");
		let efg = cde.replace("-", "");
		console.log(efg, "sem pontos");
	} */
		let firstSum: number = 0;
		let secondSum: number = 0;
		for (var i = 1; i <= 9; i++) {
			const firstValidate = parseInt(CPF.substring(i - 1, i));
			const secondValidate = parseInt(CPF.substring(i, i + 1));
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

		if (DV === CPF.substring(9)) {
			console.log(`O ${CPF} CPF foi validado com sucesso!!!`);
		} else {
			console.log(`O ${CPF} CPF não existe!!!`);
		}
	}
};

validateNumberCPF();
