
// Importaciones necesarias para el servicio
import { HttpClient } from '@angular/common/http'; // Permite hacer peticiones HTTP
import { Injectable } from '@angular/core'; // Permite que este servicio sea inyectado en otros componentes
import { Observable } from 'rxjs'; // Manejo de datos asincrónicos

// Decorador Injectable para que este servicio esté disponible en toda la aplicación
@Injectable({
  providedIn: 'root' // Hace que el servicio esté disponible globalmente sin necesidad de importarlo en cada módulo
})
export class ApiService { // Definición de la clase del servicio

  // Definimos la URL base de la API donde se conectará el frontend con el backend LoopBack
  //CONE SOT ESTAS CONECTADO TU BACK END QUE ES LOOPBACK CON EL URL 3000 QUE ESDE LOOPPBACK Y FRONT END QUE SERIA DISEÑO SOLO ANGULAR 
  private urlApi = 'http://127.0.0.1:3000/usuario';

  // Constructor: Inyecta HttpClient para hacer peticiones HTTP
  constructor(private http: HttpClient) { }

  /**
   * Método para obtener la lista de usuarios desde el backend
   * @returns Observable<any> - Devuelve un observable con los datos obtenidos del servidor
   */
  public getData(): Observable<any> {
    return this.http.get<any>(this.urlApi); // Realiza una petición GET a la API para obtener datos
  }

  /**
   * Método para crear un nuevo usuario en el backend
   
   */
  public createData(data: any): Observable<any> {
    return this.http.post<any>(this.urlApi, data); // Realiza una petición POST enviando los datos al backend
  }

  /**
   * Método para actualizar un usuario existente en el backend
   
   */
  public updateData(id: number, data: any): Observable<any> {
    return this.http.put<any>(`${this.urlApi}/${id}`, data); // Realiza una petición PUT enviando datos actualizados
  }

  /**
   * Método para eliminar un usuario en el backend
   * @param id - ID del usuario a eliminar
   * @returns Observable<any> - Devuelve un observable con la respuesta del servidor
   */
  public deleteData(id: number): Observable<any> {
    return this.http.delete<any>(`${this.urlApi}/${id}`); // Realiza una petición DELETE para eliminar un usuario
  }
}

