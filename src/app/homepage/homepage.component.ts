import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.frameLooper1();
    this.frameLooper2();
    this.showSlides();
  }

  
  
  myText1 = 'STUDENT'
  myText2 = 'REPOSITORY'
  myArray1 = this.myText1.split("");
  myArray2 = this.myText2.split("");
  loopTimer1:any;
  loopTimer2:any;

  text1= ""
  text2= ""
  frameLooper1():any{
      if (this.myArray1.length > 0) {
        console.log("frame1")
          this.text1 += this.myArray1.shift();
          }else{
              clearTimeout(this.loopTimer1);
              return false;
          }
          this.loopTimer1 = setTimeout(()=>{
            this.frameLooper1()
          },200);
  }
  frameLooper2():any{
      if(this.myArray2.length > 0){
        console.log("frame2")
          this.text2 += this.myArray2.shift();

          }else{
              clearTimeout(this.loopTimer2);
              return false;
          }
          this.loopTimer2 = setTimeout(()=>{
            this.frameLooper2()
          },200);
      
  }

  slideIndex = 0;
  dot:any
  slideif:any

  showSlides() {
    console.log("showslide")
    // this.slides = ["kimsour", "marady", "somphors","sothea","rathanak"]
    this.slideif = [true, true, true, true, true]
    this.dot= ["", "", "", "", ""]
    for (let i = 0; i < this.slideif.length; i++) {
      this.slideif[i] = false;  
    }
    this.slideIndex++;
    if (this.slideIndex > this.slideif.length) {this.slideIndex = 1}    
    for (let i = 0; i < this.dot.length; i++) {
      this.dot[i] = "";
    }
    this.slideif[this.slideIndex-1] = true;  
    this.dot[this.slideIndex-1] = "active";
    setTimeout(()=>{this.showSlides()}, 2000); // Change image every 2 seconds
  }
  
    
}

