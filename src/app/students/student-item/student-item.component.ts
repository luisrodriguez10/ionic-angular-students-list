import { Component, Input, OnInit } from '@angular/core';
import { Student } from '../student.model';

@Component({
  selector: 'app-student-item',
  templateUrl: './student-item.component.html',
  styleUrls: ['./student-item.component.scss'],
})
export class StudentItemComponent implements OnInit {

  @Input() studentItem!: Student;

  constructor() { }

  ngOnInit() {}

}
