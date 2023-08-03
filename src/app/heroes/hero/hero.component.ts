import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 35;

  get capitalizedName():string {
    return this.name.toUpperCase();
  }

  getHeroDescription():string {
    return `${this.name} - ${this.age}`
  }

  changeHero(){
    this.name = 'Spiderman';
  }
  changeAge(){
    this.age = 25;
  }
  resetForm(){
    this.name = 'ironman';
    this.age = 35;
  }
}
