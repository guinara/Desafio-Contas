import { Routes } from '@angular/router';
import { EditItemComponent } from './crud/edit-item/edit-item.component';
import { LivroComponent } from './crud/ver-livro/livro.component';
import { InsertItemComponent } from './crud/insert-item/insert-item.component';
import { VerLivroUnicoComponent } from './crud/ver-livro-unico/ver-livro-unico.component';

export const routes: Routes = [
    { path: 'Inicio', title: "Página Inicial", component: LivroComponent },
    { path: '', redirectTo: "Inicio", pathMatch: 'prefix' },
    { path: 'livro/editar/:id', title: "Editar", component: EditItemComponent },
    { path: 'livro/inserir', title: "Inserir", component: InsertItemComponent },
    { path: 'livro/:id', component: VerLivroUnicoComponent }
];
