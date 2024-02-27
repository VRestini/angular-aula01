import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  templateUrl: './event-binding.component.html',
  styleUrls: ['./event-binding.component.css']
})
export class EventBindingComponent {
  numero: number = 10;
  texto: string = "Texto oculto";
  lig: boolean = true;
  incrementar() {
    this.numero = this.numero / 10;
  }

  ocultar(){
    if (this.lig == true){
      this.lig = false;
    }
    else{
      this.lig = true;
    }
    // this.ocultar = !this.ocultar
  }
}
