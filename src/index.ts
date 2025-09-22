import readlineSync from "readline-sync"
import { Cliente } from "./Entidade/Cliente";
import { Funcionario } from "./Entidade/Funcionarios";
import { Corte } from "./Entidade/Corte";
import { Atendimento } from "./Menu/Atendimento";


const funcionarios: Funcionario[] = [
  new Funcionario(101, "João"),
  new Funcionario(102, "Marcos"),
];

const cortes: Corte[] = [
  new Corte("Corte Social", 50),
  new Corte("Low Fade", 70),
  new Corte("Undercut", 30),
];

const nomeCliente = readlineSync.question("Digite o nome do cliente: ")
const idadeCliente = Number(readlineSync.question("Digite a idade do cliente: "))
const cliente = new Cliente(nomeCliente, idadeCliente)

console.log("\nEscolha um funcionário:")
funcionarios.forEach((f, i) =>
  console.log(`${i + 1} - ${f.nome} (Matrícula: ${f.matricula})`)
)
const Ifuncionario = Number(readlineSync.question("Digite o número: ")) - 1
const funcionario = funcionarios[Ifuncionario]!;

console.log("\nEscolha um corte:")
cortes.forEach((c, i) => console.log(`${i + 1} - ${c.nome} (R$ ${c.valor})`))
const Icorte = Number(readlineSync.question("Digite o número: ")) - 1
const corte = cortes[Icorte]!;

const atendimento = new Atendimento(cliente, funcionario, corte)

console.log(atendimento.resumo())