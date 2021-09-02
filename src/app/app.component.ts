import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  tarea = ""
  guardarTarea(){
    console.log("Se guarda la tarea " + this.tarea)
  }
}
