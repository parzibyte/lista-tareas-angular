import { Injectable } from '@angular/core';
import { TareaPendiente } from './tarea-pendiente';

@Injectable({
  providedIn: 'root'
})
export class TareasService {
  CLAVE_LOCAL_STORAGE = "tareas_angular"

  constructor() { }

  agregarTarea(tarea: string) {
    const tareas = this.obtenerTareas();
    tareas.push(new TareaPendiente(tarea))
    this.guardarTareas(tareas)
  }
  obtenerTareas(): TareaPendiente[] {
    return JSON.parse(localStorage.getItem(this.CLAVE_LOCAL_STORAGE) || "[]")
  }
  guardarTareas(tareas: TareaPendiente[]) {
    localStorage.setItem(this.CLAVE_LOCAL_STORAGE, JSON.stringify(tareas))
  }
}
