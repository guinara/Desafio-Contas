
import { Component, OnInit } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { ActivatedRoute, Router } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Livro } from './../ver-livro/livro.model';
import { LivroService } from './../ver-livro/livro.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-edit-item',
  standalone: true,
  imports: [MatInput, MatButton, MatIcon, MatFormFieldModule, FormsModule],
  templateUrl: './edit-item.component.html',
  styleUrl: './edit-item.component.css'
})
export class EditItemComponent implements OnInit {
  livro: Livro = {
    idLivro: 0,
    titulo: "",
    sinopse: "",
    autor: "",
    imagem: "",
    preco: 0.00
  }
  Formulario = new FormGroup({
    titulo: new FormControl(''),
    sinopse: new FormControl(''),
    Autor: new FormControl(''),
    preco: new FormControl(0.00),
    imagem: new FormControl('')
  });
  constructor(private livroService: LivroService,
    private router: Router,
    private route: ActivatedRoute) {
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
  editar(event: Event) {

    event.preventDefault()
    console.log(this.livro)
    this.livroService.update(this.livro).subscribe(() => {
      this.livroService.showMessage('Livro editado!')
      this.router.navigate(['/Inicio'])
    })
  }

  deletar(): void {
    this.livroService.delete(String(this.route.snapshot.paramMap.get('id'))).subscribe(() => {
      this.livroService.showMessage('Livro excluído!')
      this.router.navigate(['/'])
    })
  }

}

