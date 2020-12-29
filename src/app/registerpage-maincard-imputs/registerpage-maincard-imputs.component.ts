import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registerpage-maincard-imputs',
  templateUrl: './registerpage-maincard-imputs.component.html',
  styleUrls: ['./registerpage-maincard-imputs.component.css']
})
export class RegisterpageMaincardImputsComponent implements OnInit {
  username = "";
  password = "";
  email = "";
 

  constructor() { }

  ngOnInit(): void {
  }

}
