import { Component } from '@angular/core';
import { Filmes, Series } from './app.models';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-escola1';

  titulo = null;
  ano = null;
  genero = null;
  descricao = null;
  duracao = null;
  qtd_temporada = null;
  
  filmes = [ new Filmes ('Interstelar','2014','Ficção científica/Aventura', '2h 49m','As reservas naturais da Terra estão chegando ao fim e um grupo de astronautas recebe a missão de verificar poss´veis planetas para receberem a população mundial, possibilitando a continuação da espécie.')];
  series =[];

  tipos=['Filme', 'Serie'];
  selecionarTipo= null;

  editandoFilme: Filmes= null;
  editandoSerie: Series= null;
  filme_serie= null;

  selecionar(tipo){
    this.selecionarTipo = tipo;
  }

  salvar(){
    if (this.editandoFilme) {
      this.editandoFilme.titulo = this.titulo;
      this.editandoFilme.ano= this.ano;
      this.editandoFilme.genero= this.genero
      this.editandoFilme.descricao= this.descricao;
      this.editandoFilme.duracao= this.duracao;
    }
    else if (this.editandoSerie){
      this.editandoSerie.titulo= this.titulo;
      this.editandoSerie.ano= this.ano;
      this.editandoSerie.genero= this.genero;
      this.editandoSerie.descricao= this.descricao;
      this.editandoSerie.qtd_temporada= this.qtd_temporada;
    }
    else if (this.selecionarTipo == 'Filme'){
      const addFilme = new Filmes(this.titulo, this.ano, this.genero, this.duracao, this.descricao);
      this.filmes.push(addFilme);
    }
    else{
      const addSerie = new Series(this.titulo, this.ano, this.genero, this.descricao, this.qtd_temporada);
      this.series.push(addSerie);
    }

    var radio = (document.querySelectorAll('#radio'));
    this.titulo= null;
    this.ano= null;
    this.genero= null;
    this.duracao= null;
    this.descricao= null;
    this.qtd_temporada= null;
    this.selecionarTipo= null;
    this.editandoFilme= null;
    this.editandoSerie=null;
    for (var i = 0; i < radio.length; i++) {
        (radio[i]  as HTMLInputElement).checked= false;
    }  


  }

  editar(lista, tipo) {
    var radio = (document.querySelectorAll('#radio'));
    if (tipo == "Filme") {
      this.titulo = lista.titulo;
      this.ano = lista.ano;
      this.genero = lista.genero;
      this.duracao = lista.duracao;
      this.descricao = lista.descricao;
      this.editandoFilme = lista;
      for (var i = 0; i < radio.length; i++) {
        if ( (radio[i] as HTMLInputElement).value == 'Filme') {
          (radio[i]  as HTMLInputElement).checked= true;
        }
      }
    }
    else{
      this.titulo= lista.titulo;
      this.ano= lista.ano;
      this.genero= lista.genero;
      this.descricao= lista.descricao;
      this.qtd_temporada= lista.qtd_temporada;
      this.editandoSerie= lista;    

      for (var i = 0; i < radio.length; i++) {
        if ( (radio[i] as HTMLInputElement).value == 'Serie') {
          (radio[i]  as HTMLInputElement).checked= true;
        }
      }  
    }
  }

  cancelar(){
    var radio = (document.querySelectorAll('#radio'));
    this.titulo= null;
    this.ano= null;
    this.genero= null;
    this.duracao= null;
    this.descricao= null;
    this.qtd_temporada= null;
    this.selecionarTipo= null;
    this.editandoFilme= null;
    this.editandoSerie=null;
    for (var i = 0; i < radio.length; i++) {
        (radio[i]  as HTMLInputElement).checked= false;
    }
  }

  excluir(lista, tipo) {
    if (lista.classificacao > 3) {
      alert('Você não pode excluir conteudo com classificação acima de 3 estrelas !!!');
    }
    else {
      if (tipo == 'Filme') {
        if (this.editandoFilme == lista) {
          alert('Você não pode excluir enquanto estiver editando !!!');
        } else {
          if (confirm('Deseja excluir Filme da lista? ')) {
            let indice = this.filmes.indexOf(lista);
            this.filmes.splice(indice, 1);
          }
        }
      }

      else {
        if (this.editandoSerie == lista) {
          alert('Você não pode excluir enquanto estiver editando !!!');
        } else {
          if (confirm('Deseja excluir Serie da lista? ')) {
            let indice = this.series.indexOf(lista);
            this.series.splice(indice, 1);
          }
        }
      }
    }
  }
  /*
  Filme_Serie(i){
    this.filme_serie= i.titulo;
  }*/

  classificar(tipo, lista, num) {
    lista.classificacao = num;

    if (tipo == 'Filme') {
      var divF = (document.querySelectorAll('#divFilme'));
      let iF = this.filmes.indexOf(lista);
      for (var i = 0; i < 5; i++) {
        if (i < num) {
          (divF[iF].childNodes[i] as HTMLInputElement).className = "fa fa-star checked";
        } else {
          (divF[iF].childNodes[i] as HTMLInputElement).className = "fa fa-star";
        }
      }
    }
    if (tipo == 'Serie') {
      var divS = (document.querySelectorAll('#divSerie'));
      let iS = this.series.indexOf(lista);
      for (var i = 0; i < 5; i++) {
        if (i < num) {
          (divS[iS].childNodes[i] as HTMLInputElement).className = "fa fa-star checked";
        } else {
          (divS[iS].childNodes[i] as HTMLInputElement).className = "fa fa-star";
        }
      }
    }
  }
}
