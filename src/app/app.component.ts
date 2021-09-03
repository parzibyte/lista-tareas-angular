import { Component, OnInit } from '@angular/core';
import { TareasService } from './tareas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private tareasService: TareasService) { }
  tarea = ""
  tareas = []
  guardarTarea() {
    console.log("Se guarda la tarea " + this.tarea)
    this.tareasService.agregarTarea("Holaaaa")
  }
  ngOnInit() {
    console.log("Init!")
    this.tareas = this.tareasService.obtenerTareas();
    console.log(this.tareas);

  }
}
