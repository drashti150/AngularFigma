import { Component } from '@angular/core';

@Component({
  selector: 'app-success',
  templateUrl: './success.component.html',
  styleUrls: ['./success.component.css']
})
export class SuccessComponent {



  employees: any[];

  constructor() {
    this.employees = this.employeeTeamData; 
  }
  employeeTeamData = [
    {
      name:"50M+",
      description:"Wel illum qui dolorem eum fugiat quo voluptas nulla pariatur",
      photo:"/assets/Icon.jpg"
  },
  {
      name:"$100M",
      description:"Eis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam",
      photo:"/assets/Icon (1).jpg"

  },
  {
      name:"30%",
      description:"Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam",
      photo:"/assets/Icon (2).jpg"

  },
  {
    name:"60+",
    description:"Magni dolores eos qui ratione voluptatem sequi nesciunt",
    photo:"/assets/Icon (3).jpg"

}
]
}
