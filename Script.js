const key = "3a423ebe02297bfb8004e523d4ca36fd";

function ColocarDadosNaTela(dados) {
    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".text-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function BuscarCidade(cidade) {
    const resposta = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`);
    const dados = await resposta.json();

    if (resposta.ok) {
        ColocarDadosNaTela(dados);
    } else {
        alert("Cidade não encontrada. Tente novamente!");
    }
}

function CliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;
    if (cidade.trim() !== "") {
        BuscarCidade(cidade);
    } else {
        alert("Por favor, digite o nome de uma cidade.");
    }
}
