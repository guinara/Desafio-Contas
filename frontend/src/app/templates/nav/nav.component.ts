import { Component } from '@angular/core';
import { MatToolbar, MatToolbarRow } from '@angular/material/toolbar';
import { MatButton } from '@angular/material/button';
import { RouterLink, RouterOutlet } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [MatToolbar, MatToolbarRow, MatButton, RouterLink, RouterOutlet, MatIcon],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})

export class NavComponent { }
