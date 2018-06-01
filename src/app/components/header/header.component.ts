import { Component, OnInit } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
	selector: 'app-header',
	templateUrl: './header.component.html',
	styleUrls: [ './header.component.scss' ],
	animations: [
		trigger('heroState', [
			state(
				'inactive',
				style({
					backgroundColor: '#eee',
					transform: 'scale(1)'
				})
			),
			state(
				'active',
				style({
					backgroundColor: '#cfd8dc',
					transform: 'scale(1.1)'
				})
			),
			transition('inactive => active', animate('100ms ease-in')),
			transition('active => inactive', animate('100ms ease-out'))
		])
	]
})
export class HeaderComponent implements OnInit {
	menu = 'fa-bars';
	display = 'none';
	constructor() {}
	showMenu() {
		if (this.menu == 'fa-times') {
			this.menu = 'fa-bars';
			this.display = 'none';
		} else {
			this.menu = 'fa-times';
			this.display = 'block';
		}
	}
	ngOnInit() {}
}
