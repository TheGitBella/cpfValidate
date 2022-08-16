//Digite seu CPF abaixo:
//
//
//
//
//
var CPF = "492.627.070-61";
//
//
//
//
//
//
//Regex
var regex1 = /\d{3}\.\d{3}.\d{3}\-\d{2}/g;
var regex2 = /\d{11}/g;
var regex3 = /[.-]/g;
//Função de validação do CPF
var validateNumberCPF = function () {
    if (!CPF.match(regex1) && !CPF.match(regex2))
        return console.log("O CPF ".concat(CPF, " \u00E9 inv\u00E1lido!!!"));
    var formattedCPF = "";
    var simpleCPF = "";
    if (CPF.match(regex1)) {
        formattedCPF = CPF;
        simpleCPF = CPF.replace(regex3, "");
    }
    else if (CPF.match(regex2)) {
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
    var firstSum = 0;
    var secondSum = 0;
    for (var i = 1; i <= 9; i++) {
        var firstValidate = parseInt(simpleCPF.substring(i - 1, i));
        var secondValidate = parseInt(simpleCPF.substring(i, i + 1));
        var multiplier = 11 - i;
        var firstMulti = firstValidate * multiplier;
        var secondMulti = secondValidate * multiplier;
        firstSum += firstMulti;
        secondSum += secondMulti;
    }
    var firstRest = firstSum % 11;
    var firstDV;
    if (firstRest < 2) {
        firstDV = 0;
    }
    else {
        firstDV = 11 - firstRest;
    }
    var secondRest = secondSum % 11;
    var secondDV;
    secondDV = 11 - secondRest;
    var DV = firstDV.toString() + secondDV.toString();
    if (DV === simpleCPF.substring(9)) {
        console.log("O CPF ".concat(formattedCPF, " foi validado com sucesso!!!"));
    }
    else {
        console.log("O CPF ".concat(formattedCPF, " n\u00E3o existe!!!"));
    }
};
validateNumberCPF();
