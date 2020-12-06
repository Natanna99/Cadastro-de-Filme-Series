export class Conteudo{
    titulo: string;
    ano: string;
    genero: string;
    descricao: string;
    
    constructor(titulo: string, ano: string, genero: string, descricao: string){
        this.titulo = titulo,
        this.ano = ano,
        this.genero = genero,
        this.descricao = descricao;
    }

}

export class Filmes extends Conteudo{
    duracao: string;

    constructor(titulo: string, ano: string, genero: string, duracao: string, descricao: string){
        super(titulo, ano, genero, descricao);
        this.duracao = duracao;    
    }
}

export class Series extends Conteudo{
    qtd_temporada: string;

    constructor(titulo: string, ano: string, genero: string, descricao: string, qtd_temporada: string){
        super( titulo, ano, genero, descricao);
        this.qtd_temporada = qtd_temporada;
    }
}

