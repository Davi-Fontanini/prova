let aluno1 = {
    nome: "Kayky de Brito da Silva", 
    idade: 15,
    cursando: ["TIA", "PDM", "BD1", "BD2", "AOS"],
    presença: ["2022-01-01", "2022-01-02", "2022-01-03", "2022-01-04", "2022-01-05", "2022-01-06", "2022-01-07", "2022-01-08", "2022-01-09", "2022-01-10"],
    ra: "22002200"
}

function ValidaCadastro() {

    if(aluno1.nome.length >= 10) {
        if(aluno1.idade >= 14){
            if(aluno1.cursando.length >= 3) {
                if(aluno1.presenca.length >= 3) {
                    if(aluno1.ra.length == 7) {
                        return console.log("deu certo")
                    } else {
                        console.log("Erro: O RA do aluno1 deve ter exatamente 7 caracteres")
                    }
                } else {
                    console.log("Erro: O aluno deve ter no mínimo 3 presenças")
                }
            } else {
                console.log("Erro: O aluno deve estar cursando no mínimo 3 cursos")
            }

        } else {
            console.log("Erro: O aluno tem que ter no mínimo 14 anos")
        }

    } else {
        console.log("Erro: Nome do aluno deve ter no mínimo 10 caracteres")
    }
}

ValidaCadastro()