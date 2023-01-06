import { Injectable } from '@angular/core';
import { Student } from './student.model';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  private students: Student[] = [
    {
      id: 's1',
      firstName: 'Luis',
      lastName: 'Rodriguez',
      imageUrl: 'https://www.shutterstock.com/image-photo/portrait-smiling-young-college-student-260nw-1192615495.jpg',
      courses: ['Math', 'Physics', 'Coding']
    },
    {
      id: 's2',
      firstName: 'Katty',
      lastName: 'Carrascal',
      imageUrl: 'https://st2.depositphotos.com/3889193/6856/i/600/depositphotos_68564721-stock-photo-beautiful-young-student-posing.jpg',
      courses: ['Math', 'Physics', 'Coding']
    }
  ]

  constructor() { }

  getAllStudents(){
    return [...this.students];
  }

  getStudent(studentId: string){
    return {...this.students.find(student => student.id === studentId)};
  }

  deleteStudent(studentId: string){
    this.students = this.students.filter(student => student.id !== studentId);
  }
}
