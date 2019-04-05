import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dhoni',
  templateUrl: './dhoni.component.html',
  styleUrls: ['./dhoni.component.css']
})
export class DhoniComponent implements OnInit {
  username = '';
  
  constructor() { }

  ngOnInit() {
  }
   getInputName(event: Event) {
       this.username = (<HTMLInputElement>event.target).value;
   }
  showUserName() {
      this.username = '';
  }
  removeDisable(){
    if (this.username === '') {
         return false;
    } else {
         return true;
    }
  }

}
