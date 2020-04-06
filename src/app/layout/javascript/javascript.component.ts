import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.scss']
})
export class JavascriptComponent implements OnInit {
  panelOpenState = false;

  dob = new Date(1992, 3, 18);
  salary: number = 333300;

  constructor() {}

  ngOnInit(): void {}

  employees: any[] = [
    {
      name: 'Suraj',
      salary: 89897.09,
      dob: '18/04/1992',
      gender: 'Male'
    },
    {
      name: 'Sonu',
      salary: 45987,
      dob: '18/04/1992',
      gender: 'Female'
    },
    {
      name: 'Sachin',
      salary: 36521,
      dob: '18/04/1992',
      gender: 'Male'
    },
    {
      name: 'Suchita',
      salary: 45874,
      dob: '18/04/1992',
      gender: 'Female'
    },
    {
      name: 'Sagar',
      salary: 45875,
      dob: '18/04/1992',
      gender: 'Male'
    }
  ];
}
