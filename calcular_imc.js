function calcular_imc() {
    for (var i = 1; i <= 10; i++) {
        var nome = prompt('Informe seu nome: ');
        var altura = parseFloat(prompt('Informe sua altura (metros): '));
        var peso = parseFloat(prompt('Informe o seu peso (kg)'));

        var imc = peso / (altura * altura);

        var classificacao;
        if (imc < 18.5) {
            classificacao = 'Abaixo do peso';
        } else if (imc < 24.9) {
            classificacao = 'Peso normal';
        } else if (imc < 29.9) {
            classificacao = 'Sobre peso';
        } else if (imc < 34.9) {
            classificacao = 'Obesidade Grau 1';
        } else if (imc < 39.9) {
            classificacao = 'Obesidade Grau 2';
        } else {
            classificacao = 'Obesidade Grau 3';
        }

        console.log(nome +":");
        console.log("IMC: " + imc.toFixed(2));
        console.log("Classificação: " + classificacao);
        console.log("\n");

        alert(nome + ", seu IMC é: " + imc.toFixed(2) + "\nClassificação: " + classificacao);
    }
}

calcular_imc();
