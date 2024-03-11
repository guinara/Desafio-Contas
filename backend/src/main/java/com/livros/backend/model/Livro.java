package com.livros.backend.model;

import jakarta.persistence.*;
import org.hibernate.annotations.Where;

@Entity
@Table(name="Livro")
@Where(clause = "status_livro = 1")
public class Livro {

    @Id
    @GeneratedValue(strategy= GenerationType.IDENTITY)
    @Column(name="id_livro")
    private long IdLivro;
    @Column(length = 100)
    private String Titulo;
    @Column(length = 1200)
    private String Sinopse;
    @Column(length = 60)
    private String Autor;
    @Column(length = 130)
    private String Imagem;
    private Double Preco;


    @Column(name="status_livro",length = 1)
    private Integer Status;

    public Livro(String titulo, String sinopse, String autor, String imagem, Double preco,Integer status) {
        Titulo = titulo;
        Sinopse = sinopse;
        Autor = autor;
        Imagem = imagem;
        Preco = preco;
        Status=status;
    }

    public Livro() {

    }

    public long getIdLivro() {
        return IdLivro;
    }

    public String getTitulo() {
        return Titulo;
    }

    public void setTitulo(String titulo) {
        Titulo = titulo;
    }

    public String getSinopse() {
        return Sinopse;
    }

    public void setSinopse(String sinopse) {
        Sinopse = sinopse;
    }

    public String getAutor() {
        return Autor;
    }

    public void setAutor(String autor) {
        Autor = autor;
    }

    public String getImagem() {
        return Imagem;
    }

    public void setImagem(String imagem) {
        Imagem = imagem;
    }

    public Double getPreco() {
        return Preco;
    }

    public void setPreco(Double preco) {
        Preco = preco;
    }
    public Integer getStatus() {
        return Status;
    }

    public void setStatus(Integer status) {
        Status = status;
    }


}
