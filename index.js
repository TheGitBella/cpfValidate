// //Digite seu CPF (somente números):
var CPF = "40173765092";
//regex
var regex = /\d{3}(\.\d{3}){2}\-\d{2}/g;
var result = "123.123.123-12".match(regex);
console.log("🚀🔴", result);
var validateNumberCPF = function () {
    if (CPF.length != 11) {
        console.log("CPF deve conter 11 dígitos!!!");
    }
    else {
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
            console.log("CPF validado com sucesso!!!");
        }
        else {
            console.log("CPF não existe!!!");
        }
    }
};
validateNumberCPF();
