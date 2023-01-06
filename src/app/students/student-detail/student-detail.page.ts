import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Student } from '../student.model';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-student-detail',
  templateUrl: './student-detail.page.html',
  styleUrls: ['./student-detail.page.scss'],
})
export class StudentDetailPage implements OnInit {

  loadedStudent!: Student;

  constructor(
    private studentsService: StudentsService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private alertCtrl: AlertController
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((paramMap) => {
      if(!paramMap.has('studentId')){
        this.router.navigate(['/students'])
        return;
      }
      const studentId = paramMap.get('studentId');
      if(!studentId){
        this.router.navigate(['/students'])
        return;
      }
      this.loadedStudent = this.studentsService.getStudent(studentId);
    })
  }

  deleteStudent(){
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you want to delete this student?',
      buttons: [
        {
          text: 'Cancel',
          role: 'Cancel'
        },
        {
          text: 'Delete',
          handler: () =>{
            this.studentsService.deleteStudent(this.loadedStudent.id!);
            this.router.navigate(['/students'])
          }
        }
      ]
    }).then( alertEl => {
      alertEl.present();
    })

  }



}
