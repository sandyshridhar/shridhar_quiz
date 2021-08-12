import { Component } from '@angular/core';
import  quiz from '../quiz.json';
 
@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.scss']
})
 
export class IndexComponent  {
 buttonname="Play"
 //question:any;
 notAttempted:any;
 correct:any;
 currentQuestionSet:any;
 start=false;
 gameover=false;
currentIndex:number ;
questions:any;

 constructor() {
    this.questions =  quiz;

  //question:question[]=  question; 
  console.log( this.questions.length+"::");

  this.currentIndex=0;
  this.currentQuestionSet= this.questions[this.currentIndex];

  }
  res: any = [];

  submit()
  {
    // confirm("Are you Ready!");
    let i = 0;
    this.buttonname="Replay";
    if(this.currentIndex+1==this.questions.length)
    {
     
      this.gameover = true;   
      this.start = false; 
      this.correct = 0;
      this.notAttempted = 0;
      this.questions.map((x: { selected: number; answer: any; }) => {
        if (x.selected != 0) {
          if (x.selected == x.answer) 
          {
            this.correct = this.correct + 1;
            this.res[i] = x.selected;
            i++;
          }else {
            this.res[i] = 'incorrect';
            i++;
          }
        } 
        else {
          this.notAttempted = this.notAttempted + 1;
          this.res[i] = 'notattempt';
          i++;
        }
        x.selected = 0;
      });

    }
  }
  
  next()
  {
    this.currentIndex=this.currentIndex+1;
    this.currentQuestionSet=this.questions[this.currentIndex];
   
  }
  

  // ngOnInit(): void {
  // }
  startQuiz()
  {
  
    this.gameover = false;
    this.currentIndex = 0;
    this.currentQuestionSet = this.questions[this.currentIndex];
    this.start = true; 

  }

}
