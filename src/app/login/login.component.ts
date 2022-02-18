import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../shared/api.service';
import { UserModel } from './user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private api:ApiService, private router:Router) { 

  }

  ngOnInit(): void {
  }

  
  container = ""
  signinemail = ""
  signinpassword = ""
  signupname = ""
  signupschoolname = ""
  signupemail = ""
  signuppassword = ""
  users:UserModel = new UserModel

  toSignin(){
    this.container = ""
    console.log("signin")
  }


  toSignup(){
    this.container += "right-panel-active"
    console.log("signup")
  }

  
  signin(){
    this.api.signin()
    .subscribe(res=>{
    const length=res.length
      let i=0
      for(i = 0;i<length;i++){
        if(res[i].email===this.signinemail && res[i].password===this.signinpassword){
          alert("Sign In Sucessfully")
          this.router.navigate(['/','home'])
          break
        }
      }
      if(i===length){
        alert("Sign In Fail")
        
    }
    })
  }


  signup(){
    this.api.signin()
    .subscribe(res=>{
    const length=res.length
      let i=0
      for(i = 0;i<length;i++){
        if(res[i].email===this.signupemail){
          alert("Duplicate Email")
          break
        }
      }
      if(i===length){
        this.users.id = this.signupemail
        this.users.name = this.signupname
        this.users.school_name = this.signupschoolname
        this.users.email = this.signupemail
        this.users.password = this.signuppassword
        this.api.signup(this.users).subscribe(res=>{
          alert("Sign Up Sucessfull")   
          this.router.navigate(['/','home'])
        })
        
    }
    })

    
    
  }

}
