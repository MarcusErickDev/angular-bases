import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroes: string[] = ['Spiderman','Ironman','Hulk','Thor'];
  public lastHero?: string;

  deleteLastHero(){
    this.lastHero = this.heroes.pop();

  }

}
