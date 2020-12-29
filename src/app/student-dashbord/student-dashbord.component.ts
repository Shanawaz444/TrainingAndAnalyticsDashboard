import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-student-dashbord',
  templateUrl: './student-dashbord.component.html',
  styleUrls: ['./student-dashbord.component.css']
})
export class StudentDashbordComponent implements OnInit {

  constructor() { }

  subject1:string=""
  subject2:string=""
  subject3:string=""
  subject4:string=""
  subject5:string=""
  subject6:string=""

  total_percentage:string=""
  mid1_marks:string=""
  mid2_marks:string=""
  attendence=""


  weeklytest1:string=""
  weeklytest2:string=""
  weeklytest3:string=""
  weeklytest4:string=""



  ngOnInit(): void {

    this.subject1="Subject1"
    this.subject2="Subject2"
    this.subject3="Subject3"
    this.subject4="Subject4"
    this.subject5="Subject5"
    this.subject6="Subject6"

    this.total_percentage="70"
    this.mid1_marks="30"
    this.mid2_marks="40"
    this.attendence="60"
    this.weeklytest1="10"
    this.weeklytest2="8"
    this.weeklytest3="7"
    this.weeklytest4="10"
    
  }

}
