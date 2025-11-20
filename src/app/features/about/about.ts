import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';

@Component({
  selector: 'app-about',
  imports: [CommonModule, MatCardModule, MatDividerModule],
  templateUrl: './about.html',
  styleUrl: './about.scss',
})
export class About {

}
