import { Component } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  data: any[] = [];
  newData: any = {}; 
  editData: any = null; 


  
  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.llenarData();
  }

  llenarData() {
    this.apiService.getData().subscribe(data => {
      this.data = data;
      console.log(this.data);
    });
  }

  crearData() {
    this.apiService.createData(this.newData).subscribe(response => {
      this.data.push(response); 
      this.newData = {}; 
    });
  }

  editarData(item: any) {
    this.editData = { ...item }; 
  }

actualizarData() {
  this.apiService.updateData(this.editData.id, this.editData).subscribe(response => {
    if (response) {
      const index = this.data.findIndex(item => item.id === this.editData.id);
      if (index !== -1) {
        this.data.splice(index, 1, response); 
      }
    }
    this.editData = null; 
  });
}

  eliminarData(id: number) {
    this.apiService.deleteData(id).subscribe({
      next: () => {
        this.data = this.data.filter(item => item.id !== id); 
      },
      error: (error) => {
        console.error('Error al eliminar el dato:', error); 
      }
    });
  }
}