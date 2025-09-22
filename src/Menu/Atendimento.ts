import { Cliente } from "../Entidade/Cliente";
import { Funcionario } from "../Entidade/Funcionarios";
import { Corte } from "../Entidade/Corte";

export class Atendimento {
  public valorFinal: number;

  constructor(
    public cliente: Cliente,
    public funcionario: Funcionario,
    public corte: Corte
  ) {
    this.valorFinal = cliente.idade < 18 ? corte.valor * 0.7 : corte.valor;
  }

  resumo(): string {
    return `
======= 💈 BaberShop =======
👤 Cliente: ${this.cliente.nome} (${this.cliente.idade} anos)
💼 Funcionário: ${this.funcionario.nome} (Matrícula: ${this.funcionario.matricula})
✂️ Corte escolhido: ${this.corte.nome}
💰 Valor final: R$ ${this.valorFinal.toFixed(2)}
    `;
  }
}
