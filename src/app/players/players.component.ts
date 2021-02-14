import { Component, OnInit } from '@angular/core';
import { PlayersService } from '../players.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {
  players : any;
  constructor(private playersService : PlayersService) { }

  ngOnInit(): void {

    let playersResp = this.playersService.getPlayersResp();
    playersResp.subscribe(jsonData => this.players = jsonData);
    playersResp.subscribe(jsonData => console.log(jsonData));

  }

}
