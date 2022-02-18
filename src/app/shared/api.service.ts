import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http : HttpClient) { }

  get_student(){
    return this.http.get<any>("http://localhost:3000/student_info");
  }
  postStudent(data : any){
    return this.http.post<any>("http://localhost:3000/student_info", data)
      .pipe(map((res:any)=>{
        return res;
    }))
  }
  getStudent(){
    return this.http.get<any>("http://localhost:3000/student_info")
      .pipe(map((res:any)=>{
        return res;
    }))
  }
  updateStudent(data : any, id:number){
    return this.http.put<any>("http://localhost:3000/student_info/"+id, data)
      .pipe(map((res:any)=>{
        return res;
    }))
  }
  deleteStudent(id:number){
    return this.http.delete<any>("http://localhost:3000/student_info/"+id)
      .pipe(map((res:any)=>{
        return res;
    }))
  }
  Search(id:number){
    return this.http.get<any>("http://localhost:3000/student_info/"+id)
    .pipe(map((res:any)=>{
      return res;
    }))
  }

  signin(){
    return this.http.get<any>("http://localhost:3000/user_login")
  }

  signup(data:any){
    //return this.http.post<any>("http://localhost:3000/user_login", data)
    return this.http.post<any>("http://localhost:3000/user_login", data)
      .pipe(map((res:any)=>{
        return res;
    }))
  }

}
