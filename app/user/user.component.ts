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
		if(this.username !== null) {
			this.isEnabled = true;
		}
	}
	onReset() {
		this.username = '';
	}

  ngOnInit(): void {
  }

}
