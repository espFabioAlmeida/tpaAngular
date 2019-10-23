import { Veiculo } from './veiculo';

export class Pagamento
{
    tipo: String;
    veiculo: Veiculo;
    taxas: any;
    valor: any;

    cartao: String;
    codigo: String;
    titular: String;
    vencimento: String;

    nome: String;
    cpfCnpj: String;
    email: String;
    telefone: String;
    cep: String;
    logradouro: String;
    localidade: String;
    bairro: String;
    complemento: String;
}