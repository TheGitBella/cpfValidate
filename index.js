// //Digite seu CPF (somente números):
var CPF = "401.737.650-92";
//regex
//const regex = /(\d{3}\.\d{3}.\d{3}\-\d{2})|(\d{11})/g;
var regex1 = /\d{3}\.\d{3}.\d{3}\-\d{2}/g;
var regex2 = /\d{11}/g;
var validateNumberCPF = function () {
    if (!CPF.match(regex1) && !CPF.match(regex2)) {
        console.log("O CPF ".concat(CPF, " \u00E9 inv\u00E1lido!!!"));
    }
    else {
        /* 	if (CPF.match(regex1)) {
        let abc = CPF.replace(".", "");
        let bcd = abc.replace(".", "");
        let cde = bcd.replace(".", "");
        let efg = cde.replace("-", "");
        console.log(efg, "sem pontos");
    } */
        var firstSum = 0;
        var secondSum = 0;
        for (var i = 1; i <= 9; i++) {
            var firstValidate = parseInt(CPF.substring(i - 1, i));
            var secondValidate = parseInt(CPF.substring(i, i + 1));
            var multiplier = 11 - i;
            var firstMulti = firstValidate * multiplier;
            var secondMulti = secondValidate * multiplier;
            firstSum += firstMulti;
            secondSum += secondMulti;
        }
        var firstRest = firstSum % 11;
        var firstDV = void 0;
        if (firstRest < 2) {
            firstDV = 0;
        }
        else {
            firstDV = 11 - firstRest;
        }
        var secondRest = secondSum % 11;
        var secondDV = void 0;
        secondDV = 11 - secondRest;
        var DV = firstDV.toString() + secondDV.toString();
        if (DV === CPF.substring(9)) {
            console.log("O ".concat(CPF, " CPF foi validado com sucesso!!!"));
        }
        else {
            console.log("O ".concat(CPF, " CPF n\u00E3o existe!!!"));
        }
    }
};
validateNumberCPF();
