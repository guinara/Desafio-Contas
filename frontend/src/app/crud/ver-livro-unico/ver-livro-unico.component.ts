import { Component, OnInit } from '@angular/core';
import { MatLabel } from '@angular/material/form-field';
import { Livro } from '../ver-livro/livro.model';
import { LivroService } from '../ver-livro/livro.service';
import { ActivatedRoute, Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ver-livro-unico',
  standalone: true,
  imports: [MatLabel, CommonModule],
  templateUrl: './ver-livro-unico.component.html',
  styleUrl: './ver-livro-unico.component.scss'
})
export class VerLivroUnicoComponent implements OnInit {

  constructor(private livroService: LivroService,
    private router: Router,
    private route: ActivatedRoute) {
  }
  livro: Livro = {
    titulo: "",
    sinopse: "",
    autor: "",
    imagem: "",
    preco: 0.00
  }
  ngOnInit(): void {
    let LivroId = String(this.route.snapshot.paramMap.get('id'))
    this.livroService.readById(LivroId).subscribe(livro => {
      this.livro = livro
    });

  }

  cancelar(): void {
    this.router.navigate(['/Inicio'])
  }
}
