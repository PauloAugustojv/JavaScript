import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js";
import { Diretor } from "./Funcionarios/Diretor.js";
import {Funcionario} from "./Funcionarios/Funcionario.js";

import { SistemaAutenticacao } from "./SistemaAutenticacao.js";
const diretor = new Diretor("Rodrigo", 10000, 12345678900);
const gerente = new Gerente("Ricardo", 5000, 12354356354);

gerente.cadastrarSenha("123");
diretor.cadastrarSenha("123456");

const GerenteEstaLogado = SistemaAutenticacao.login(diretor,"123");
const DiretorEstaLogado = SistemaAutenticacao.login(diretor,"123456");
const cliente = new Cliente("Lais", 78634812390, "456");
const ClienteEstaLogado = SistemaAutenticacao.login(cliente,"456");



console.log(ClienteEstaLogado);





