import { Component, OnInit } from '@angular/core';
import { Match } from '../match'

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.css']
})
export class MatchesComponent implements OnInit {

  match: Match = {
    matchID: 1,
    heroes: [{name: 'Windstorm', 
    heroID: 33
  }],
    winningTeam: 'Radiant Win'
  };


  constructor() { }

  ngOnInit() {
    
  }

}
