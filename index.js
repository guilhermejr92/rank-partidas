function calcularNivel(vitorias = null, derrotas = null) {
    // Se nenhum valor for fornecido, gerar números aleatórios para as vitórias e derrotas
    if (vitorias === null || derrotas === null) {
        vitorias = Math.floor(Math.random() * 150); // Números aleatórios entre 0 e 149
        derrotas = Math.floor(Math.random() * 150); // Números aleatórios entre 0 e 149
    }

    let saldoVitorias = vitorias - derrotas;
    let nivel;

    if (saldoVitorias < 10) {
        nivel = "Ferro";
    } else if (saldoVitorias >= 10 && saldoVitorias <= 20) {
        nivel = "Bronze";
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = "Prata";
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = "Ouro";
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = "Diamante";
    } else if (saldoVitorias >= 91 && saldoVitorias <= 100) {
        nivel = "Lendário";
    } else {
        nivel = "Imortal";
    }

    return `O Herói tem ${vitorias} vitórias e ${derrotas} derrotas, com saldo de ${saldoVitorias}, está no nível de ${nivel}`;
}

// Exemplo de uso da função com valores fornecidos
console.log(calcularNivel(85, 20)); // Saída com valores fornecidos
console.log(calcularNivel(5, 20)); // Saída com valores fornecidos

