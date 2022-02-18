import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/api.service';

@Component({
  selector: 'app-student-pf',
  templateUrl: './student-pf.component.html',
  styleUrls: ['./student-pf.component.css']
})
export class StudentPfComponent implements OnInit {

  constructor(private api : ApiService) { }

  studentData !: any;

  ngOnInit(): void {
    this.getAllStudent()
  }

  getAllStudent(){
    this.api.getStudent()
    .subscribe(res=>{
      this.studentData = res;
    })
  }
}
