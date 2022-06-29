import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  isEnabled = false;
	username = '';
	constructor() { 
	}
	onAddUser(event: Event) {
		if((<HTMLInputElement>event.target).value !== null) {
      this.isEnabled = true;
      this.username = (<HTMLInputElement>event.target).value;
    } 
	}
  onReset() {
    this.username = '';
  }
  ngOnInit(): void {
  }

}
