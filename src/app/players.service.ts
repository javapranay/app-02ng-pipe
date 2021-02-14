import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PlayersService {

  constructor(private http : HttpClient) { }

  getPlayersResp(){
    return this.http.get("http://demo2773543.mockable.io/getPlayersHistory");
  }

}
