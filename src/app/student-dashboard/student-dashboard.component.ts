import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import { ApiService } from '../shared/api.service';
import { StudentModel } from './student-dashboard.model';


@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.css']
})
export class StudentDashboardComponent implements OnInit {

  formValue !: FormGroup;

  studentModelObj: StudentModel = new StudentModel();
  studentData !: any;

  constructor(private formbuilder: FormBuilder,
    private api : ApiService){}
  
  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      id : [''],
      name: [''],
      age : [''],
      department : [''],
      province : ['']
    })
    // call to get all the data and display at our table
    this.getAllStudent();
  }

  postStudentDetails(){
    this.studentModelObj.id = this.formValue.value.id;
    this.studentModelObj.name = this.formValue.value.name;
    this.studentModelObj.age = this.formValue.value.age;
    this.studentModelObj.department = this.formValue.value.department;
    this.studentModelObj.province = this.formValue.value.province;
    
    this.api.postStudent(this.studentModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("student add successfully")
      // to make the form disappear after adding the data
      let ref = document.getElementById("cancel");
      ref?.click();
      // call value and reset the form
      this.formValue.reset();
      this.getAllStudent();

    },
    err=>{
      alert("something went wrong");
    })
  }
  // to display all the record from api into the table
  getAllStudent(){
    this.api.getStudent()
    .subscribe(res=>{
      this.studentData = res;
    })
  }
  deleteStudent(row:any){
    this.api.deleteStudent(row.id)
    .subscribe(res=>{
      alert("Are you sure you want to delete this record ?")
      this.getAllStudent();
    })
  }
  onEdit(row : any){
    this.studentModelObj.id = row.id;
    this.formValue.controls['id'].setValue(row.id);
    this.formValue.controls['name'].setValue(row.name);
    this.formValue.controls['age'].setValue(row.age);
    this.formValue.controls['department'].setValue(row.department);
    this.formValue.controls['province'].setValue(row.province);
  }
  updateStudentDetails(){
    this.studentModelObj.id = this.formValue.value.id;
    this.studentModelObj.name = this.formValue.value.name;
    this.studentModelObj.age = this.formValue.value.age;
    this.studentModelObj.department = this.formValue.value.department;
    this.studentModelObj.province = this.formValue.value.province;
  
    this.api.updateStudent(this.studentModelObj, this.studentModelObj.id)
    .subscribe(res=>{
      alert("Update successfully")
      let ref = document.getElementById("cancel");
      ref?.click();
      // call value and reset the form
      this.formValue.reset();
      this.getAllStudent();
    })
  }
}
