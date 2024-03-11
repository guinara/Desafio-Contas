import { UploadImageService } from './upload-image.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatInput } from '@angular/material/input';
import { MatIcon } from '@angular/material/icon';
import { MatButton } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { Livro } from './../ver-livro/livro.model';
import { LivroService } from './../ver-livro/livro.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-insert-item',
  standalone: true,
  imports: [MatInput, MatButton, MatIcon, MatFormFieldModule, FormsModule, CommonModule, ReactiveFormsModule],
  templateUrl: './insert-item.component.html',
  styleUrl: './insert-item.component.css'
})


export class InsertItemComponent {
  formulario: FormGroup;
  public livro: Livro = {
    titulo: '',
    sinopse: "",
    autor: "",
    imagem: "",
    preco: 0.00
  }
  fileName = '';
  selectedFile?: File

  constructor(private livroService: LivroService, private uploadImageService: UploadImageService, private router: Router, private http: HttpClient, private formBuilder: FormBuilder) {
    this.formulario = this.formBuilder.group({
      titulo: ['', [Validators.required, Validators.maxLength(100)]],
      sinopse: ['', [Validators.required, Validators.maxLength(1200)]],
      autor: ['', [Validators.required, Validators.maxLength(60)]],
      preco: ['', [Validators.required]]
    });
  }
  voltar(): void {
    this.router.navigate(['/Inicio'])
  }

  async inserir(): Promise<void> {
    this.criarObjetoLivro()
    await this.subirImagem()
    console.log(this.livro)
    this.livroService.create(this.livro).subscribe(() => {
      this.livroService.showMessage('Livro Inserido!')
      this.router.navigate(['/'])
    })
  }
  criarObjetoLivro(): void {
    this.livro.autor = this.formulario.get("autor")?.value
    this.livro.titulo = this.formulario.get("titulo")?.value
    this.livro.preco = this.formulario.get("preco")?.value
    this.livro.sinopse = this.formulario.get("sinopse")?.value
  }
  async subirImagem(): Promise<Boolean> {

    if (!this.selectedFile) {
      alert("Insira uma imagem!")
      return false
    }
    else {
      const URL = await this.uploadImageService.requestSignedUrl()
      const URL_IMAGEM = await this.uploadImageService.uploadImage(this.selectedFile, URL)
      this.livro.imagem = URL_IMAGEM
      return true
    }
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
    if (this.selectedFile) {
      this.fileName = this.selectedFile.name;

    }
  }

  //pegar url do server

  //postar imagem

  //salvar url

}