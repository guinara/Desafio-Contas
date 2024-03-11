
import { MatSnackBar } from '@angular/material/snack-bar';
import { Injectable } from '@angular/core';
import { EMPTY, Observable, catchError, map, firstValueFrom } from 'rxjs';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})


export class UploadImageService {

    private API_ENDPOINT = 'https://ypguhu160d.execute-api.sa-east-1.amazonaws.com/uploads'
    constructor(private http: HttpClient) { }

    async uploadImage(file: File, uploadURL: string): Promise<string> {
        const blobData = new Blob([file], { type: 'image/jpeg' });
        await firstValueFrom(this.http.put(uploadURL, blobData, {
            headers: {
                'Content-Type': 'image/jpeg'
            }
        }))

        const imagemUrl = uploadURL.split('?')[0];
        console.log(" Resposta: " + imagemUrl)
        return imagemUrl;

    }

    async requestSignedUrl(): Promise<string> {

        const response = await firstValueFrom(this.http.get<any>(this.API_ENDPOINT))
        return response.uploadURL
    }
}
