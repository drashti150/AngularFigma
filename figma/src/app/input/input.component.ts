import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent {
  // @Output() buttonClicked: any = new EventEmitter();
  @Input() color: any = '#111827';

  // colors: any ={
  //   "danger": "#e74c3c",
  //   "primary": "blue",
  //   "success": "green"
  // }  
}
