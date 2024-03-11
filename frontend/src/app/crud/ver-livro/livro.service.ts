import { Livro } from './livro.model';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map } from 'rxjs';
import { HttpClientModule, HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LivroService {

    baseUrl = "http://localhost:8080/livros"

    private httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };

    constructor(private snackbar: MatSnackBar,
        private http: HttpClient) { }


    showMessage(msg: string, isError: boolean = false): void {
        this.snackbar.open(msg, 'X', {
            duration: 3000,
            horizontalPosition: "right",
            verticalPosition: "top",
            panelClass: isError ? ['msg-error'] : ['msg-success']
        })
    }

    create(Livro: Livro): Observable<Livro> {
        return this.http.post<Livro>(this.baseUrl, Livro, this.httpOptions).pipe(
            map(obj => obj), catchError(e => this.errorHandler(e))
        );
    }

    errorHandler(e: any): Observable<any> {
        console.log(e)
        this.showMessage('Ocorreu um erro!', true);
        return EMPTY;
    }
    read(): Observable<Livro[]> {
        return this.http.get<Livro[]>(this.baseUrl)
    }
    readById(id: string): Observable<Livro> {
        const url = `${this.baseUrl}/${id}`
        return this.http.get<Livro>(url)
    }
    update(livro: Livro): Observable<Livro> {
        const url = `${this.baseUrl}/${livro.idLivro}`
        return this.http.put<Livro>(url, livro)
    }
    delete(id: string): Observable<Livro> {
        const url = `${this.baseUrl}/${id}`
        return this.http.delete<Livro>(url)
    }

}
