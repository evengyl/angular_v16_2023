import { Component } from '@angular/core';

@Component({
  selector: 'app-top-players',
  templateUrl: './top-players.component.html',
  styleUrls: ['./top-players.component.css']
})
export class TopPlayersComponent {


  listTopPlayers : any[] = [
    { id: 1, name : "Pierre Cailloux", ranked : 1, win : 15669, loose : 145, avatar : "toto.jpg", money : 1200 },
    { id: 2, name : "Paul Pogba", ranked : 2, win : 15650, loose : 245, avatar : "toto.jpg", money : 10 },
    { id: 3, name : "Liridon le maçon", ranked : 3, win : 15640, loose : 4, avatar : "toto.jpg", money : 110 },
    { id: 4, name : "Dylan le mexicanos", ranked : 4, win : 15620, loose : 1256, avatar : "toto.jpg", money : 120 },
    { id: 5, name : "Jonathan qui attend", ranked : 5, win : 15610, loose : 3, avatar : "toto.jpg", money : 1420 },
    { id: 6, name : "JC Midle class", ranked : 6, win : 15610, loose : 3, avatar : "toto.jpg", money : 1420 },
    { id: 7, name : "Marvin vide ses morvinne", ranked : 7, win : 15610, loose : 3, avatar : "toto.jpg", money : 1420 },
    { id: 8, name : "Cyril Lignac", ranked : 8, win : 15610, loose : 3, avatar : "toto.jpg", money : 1420 },
    { id: 9, name : "Brandon & Kvein", ranked : 9, win : 15610, loose : 3, avatar : "toto.jpg", money : 1420 },
  ]


  banPlayer(idPlayerInParent : number){

    this.listTopPlayers = this.listTopPlayers.filter((player) => {
      
      if(player.id == idPlayerInParent) return false

      return true

    })
  }

}
