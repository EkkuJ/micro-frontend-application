import { Component, OnInit } from '@angular/core';
import '../../alien-abyss/al-abyss-react'
import '../../popsicle-dash/po-dash-react'
import '../../almond-roast/al-roast-react'

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {

	game: string;
	gameChosen: boolean;

	constructor() { }

	ngOnInit() {
		this.game = '';
		this.gameChosen = false;
	}
	
	chooseGame(game: string) {
		this.game = game;
		this.gameChosen = true;
	}
}
