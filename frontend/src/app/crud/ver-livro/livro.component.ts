import { ActivatedRoute, RouterLink, RouterOutlet } from '@angular/router';
import { LivroService } from './livro.service';
import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButton } from '@angular/material/button';
import { CommonModule, registerLocaleData } from '@angular/common';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Livro } from './livro.model';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-livro',
  standalone: true,
  imports: [MatCardModule, CommonModule, HttpClientModule, MatButton, MatIconModule, RouterLink, RouterOutlet],
  templateUrl: './livro.component.html',
  styleUrl: './livro.component.css'

})
export class LivroComponent implements OnInit {


  constructor(private livroService: LivroService, private route: ActivatedRoute) {

  }
  ngOnInit(): void {
    this.obterLivros()
  }
  public obterLivros() {
    this.livroService.read().subscribe(livros => {
      this.livros = livros
    })
  }

  livros: Livro[] = []
}
