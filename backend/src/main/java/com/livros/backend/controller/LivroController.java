package com.livros.backend.controller;

import com.livros.backend.repository.LivroRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import com.livros.backend.model.Livro;

import java.util.List;
import java.util.Map;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200/", maxAge = 3600)
@RestController
@RequestMapping(path="/livros")
public class LivroController {
    @Autowired
    private LivroRepository livroRepository;
    @RequestMapping(value = "", method = RequestMethod.GET)
    public List<Livro> Get() {
        return livroRepository.findAll();
    }
    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<Livro> GetById(@PathVariable(value = "id") long id)
    {
        Optional<Livro> livro = livroRepository.findById(id);
        if(livro.isPresent())
            return new ResponseEntity<Livro>(livro.get(), HttpStatus.OK);
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


    @PostMapping(path="")
    @ResponseBody

    public ResponseEntity<Object> insert(@RequestBody  Map<String, Object> payload)  throws Exception{
        Double preco=(Double) payload.get("preco");
        try {
            Livro l = new Livro(payload.get("titulo").toString(),
                    payload.get("sinopse").toString(),
                    payload.get("autor").toString(),
                    payload.get("imagem").toString(),
                    preco,
                    1);
            livroRepository.save(l);
            return new ResponseEntity<>("{\"Mensagem\":\"Inserido!\"}", HttpStatus.OK);
        }
        catch (Exception e){
            return new ResponseEntity<>(String.format("{'Mensagem':'%1$s'}",e.getMessage()), HttpStatus.BAD_REQUEST);
        }

    }
    @RequestMapping(value = "/{id}", method =  RequestMethod.PUT)
    public ResponseEntity<Livro> Put(@PathVariable(value = "id") long id,  @RequestBody Map<String, Object> payload)
    {
        Optional<Livro> livroAntigo = livroRepository.findById(id);
        if(livroAntigo.isPresent()){
            Livro livro = livroAntigo.get();
            livro.setTitulo(payload.get("titulo").toString());
            livro.setImagem(payload.get("imagem").toString());
            livro.setAutor(payload.get("autor").toString());
            livro.setSinopse(payload.get("sinopse").toString());
            livro.setPreco((Double)payload.get("preco"));
            livro.setStatus(livro.getStatus());
            livroRepository.save(livro);
            return new ResponseEntity<Livro>(livro, HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity<Object> Delete(@PathVariable(value = "id") long id)
    {
        Optional<Livro> livroAntigo = livroRepository.findById(id);
        if(livroAntigo.isPresent()){
            Livro livro = livroAntigo.get();
            livro.setStatus(0);
            livroRepository.save(livro);
            return new ResponseEntity<>("{'Mensagem':'Deletado!'}",HttpStatus.OK);
        }
        else
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }


}
