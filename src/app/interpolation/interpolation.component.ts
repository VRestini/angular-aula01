import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
    nome:string = "Sureki";
    imagem: string = "favicon.ico";
    numero: number=2;
}
