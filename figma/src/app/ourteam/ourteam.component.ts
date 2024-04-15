import { Component } from '@angular/core';

@Component({
  selector: 'app-ourteam',
  templateUrl: './ourteam.component.html',
  styleUrls: ['./ourteam.component.css']
})
export class OurteamComponent {


  employees: any[];

  constructor() {
    this.employees = this.employeeTeamData; 
  }
  employeeTeamData = [
    {
      name:"Kristopher A. Davis",
      position:"Designation Goes here",
      photo:"/assets/Image 2.jpg"
  },
  {
      name:"Maggie W. Roth",
      position:"Designation Goes here",
      photo:"/assets/Image 3.jpg"
  },
  {
      name:"Anthony N",
      position:"Designation Goes here",
      photo:"/assets/Image 4.jpg"
  },
  {
      name:"Tony J. Wilcoxen",
      position:"Designation Goes here",
      photo:"/assets/Image 5.jpg"
  },
  {
      name:"Kristopher A. Davis",
      position:"Designation Goes here",
      photo:"/assets/Image 6.jpg"
  },
  {
      name:"Maggie W. Roth",
      position:"Designation Goes here",
      photo:"/assets/Image 7.jpg"
  },
  {
      name:"Anthony N",
      position:"Designation Goes here",
      photo:"/assets/Image 8.jpg"
  },
  {
      name:"Tony J. Wilcoxen",
      position:"Designation Goes here",
      photo:"/assets/Image 9.jpg"
  },

]
}
