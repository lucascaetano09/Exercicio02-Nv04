function Estudante(studantName, grade1, grade2) {
  this.studantName = studantName
  this.grade1 = grade1
  this.grade2 = grade2
}

let calcularMedia = (grade1, grade2) => {
  return (grade1 + grade2) / 2
}

let estudantes = []

for (let i = 0; i < 3; i++) {
  studantName = prompt("Informe o nome do " + (i + 1) + "o estudante: ")
  grade1 = Number(
    prompt("Informe a primeira nota do " + (i + 1) + "o estudante: ")
  )
  grade2 = Number(
    prompt("Informe a segunda nota do " + (i + 1) + "o estudante: ")
  )

  estudantes.push(new Estudante(studantName, grade1, grade2))
}

let media, mensagem
for (estudante of estudantes) {
  mensagem = "A media do(a) aluno(a) --"
  media = calcularMedia(estudante.grade1, estudante.grade2)

  mensagem += estudante.studantName + "-- é:  "
  mensagem += media

  if (media >= 7) mensagem += "\nParabéns! Você foi aprovado(a) no concurso!"
  else mensagem += "\nInfelizmente você foi reprovado(a) no concurso."

  alert(mensagem)
}
