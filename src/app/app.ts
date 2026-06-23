import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

type Pantalla =
  | 'login'
  | 'admin'
  | 'estudiantes'
  | 'profesores'
  | 'materias'
  | 'horarios'
  | 'calificaciones'
  | 'reportes';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.scss']
})
export class App {
  pantalla: Pantalla = 'login';

  correo = '';
  password = '';
  error = '';

  busqueda = '';

  estudiantes = [
    {
      iniciales: 'VT',
      nombre: 'Valentina Torres',
      correo: 'v.torres@edu.pe',
      curso: '4to Secundaria',
      promedio: 16.5,
      estado: 'Activo'
    },
    {
      iniciales: 'SR',
      nombre: 'Santiago Ramírez',
      correo: 's.ramirez@edu.pe',
      curso: '3ro Secundaria',
      promedio: 14.2,
      estado: 'Activo'
    },
    {
      iniciales: 'IM',
      nombre: 'Isabella Mendoza',
      correo: 'i.mendoza@edu.pe',
      curso: '5to Secundaria',
      promedio: 18,
      estado: 'Activo'
    },
    {
      iniciales: 'MG',
      nombre: 'Mateo García',
      correo: 'm.garcia@edu.pe',
      curso: '2do Secundaria',
      promedio: 12.8,
      estado: 'Inactivo'
    },
    {
      iniciales: 'LH',
      nombre: 'Luciana Herrera',
      correo: 'l.herrera@edu.pe',
      curso: '4to Secundaria',
      promedio: 17.3,
      estado: 'Activo'
    },
    {
      iniciales: 'NV',
      nombre: 'Nicolás Vargas',
      correo: 'n.vargas@edu.pe',
      curso: '1ro Secundaria',
      promedio: 15.6,
      estado: 'Activo'
    }
  ];

  profesores = [
    {
      iniciales: 'CM',
      nombre: 'Dr. Carlos Mendoza',
      correo: 'c.mendoza@edu.pe',
      especialidad: 'Matemáticas',
      materias: ['Álgebra', 'Geometría'],
      estado: 'Activo'
    },
    {
      iniciales: 'AR',
      nombre: 'Lic. Ana Rivas',
      correo: 'a.rivas@edu.pe',
      especialidad: 'Comunicación',
      materias: ['Literatura', 'Redacción'],
      estado: 'Activo'
    },
    {
      iniciales: 'RL',
      nombre: 'Ing. Roberto Lima',
      correo: 'r.lima@edu.pe',
      especialidad: 'Ciencias',
      materias: ['Física', 'Química'],
      estado: 'Activo'
    },
    {
      iniciales: 'PS',
      nombre: 'Mg. Patricia Soto',
      correo: 'p.soto@edu.pe',
      especialidad: 'Historia',
      materias: ['Historia', 'CCSS'],
      estado: 'Inactivo'
    },
    {
      iniciales: 'FC',
      nombre: 'Dr. Fernando Cruz',
      correo: 'f.cruz@edu.pe',
      especialidad: 'Inglés',
      materias: ['Inglés I', 'Inglés II'],
      estado: 'Activo'
    }
  ];

  materias = [
    {
      nombre: 'Álgebra Lineal',
      profesor: 'Dr. Carlos Mendoza',
      horario: 'Lun/Mié 8:00–9:30',
      aula: 'Aula 101',
      estudiantes: 28
    },
    {
      nombre: 'Literatura Peruana',
      profesor: 'Lic. Ana Rivas',
      horario: 'Mar/Jue 10:00–11:30',
      aula: 'Aula 203',
      estudiantes: 32
    },
    {
      nombre: 'Física General',
      profesor: 'Ing. Roberto Lima',
      horario: 'Lun/Vie 11:00–12:30',
      aula: 'Lab. Ciencias',
      estudiantes: 25
    },
    {
      nombre: 'Química Orgánica',
      profesor: 'Ing. Roberto Lima',
      horario: 'Mié/Vie 8:00–9:30',
      aula: 'Lab. Química',
      estudiantes: 22
    },
    {
      nombre: 'Historia Universal',
      profesor: 'Mg. Patricia Soto',
      horario: 'Lun/Mié 14:00–15:30',
      aula: 'Aula 305',
      estudiantes: 30
    },
    {
      nombre: 'Inglés Intermedio',
      profesor: 'Dr. Fernando Cruz',
      horario: 'Mar/Jue 12:00–13:30',
      aula: 'Aula 210',
      estudiantes: 27
    }
  ];

  iniciarSesion() {
    if (!this.correo || !this.password) {
      this.error = 'Por favor completa todos los campos.';
      return;
    }

    this.error = '';
    this.pantalla = 'admin';
  }

  demoAdmin() {
    this.error = '';
    this.pantalla = 'admin';
  }

  irA(pantalla: Pantalla) {
    this.pantalla = pantalla;
  }

  cerrarSesion() {
    this.correo = '';
    this.password = '';
    this.error = '';
    this.pantalla = 'login';
  }

  promedioClase(valor: number) {
    if (valor >= 17) return 'success';
    if (valor >= 14) return 'warning';
    return 'danger';
  }
}