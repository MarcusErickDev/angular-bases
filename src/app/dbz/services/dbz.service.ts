import { Injectable, Input } from '@angular/core';
import { v4 as uuid } from 'uuid';
import { Character } from '../interfaces/character.interface';

@Injectable({ providedIn: 'root' })
export class DbzService {
  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 10000,
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 500,
    },
    {
      id: uuid(),
      name: 'Vegetta',
      power: 5000,
    },
  ];

  @Input() public index: number = 0;

  addCharacter(character: Character): void {
    // this.characters.push(character);
    this.characters.push({ id: uuid(), ...character });
  }

  deleteCharacterById(id: string) {
    this.characters = this.characters.filter(
      (character) => character.id !== id
    );
  }

  // onDeleteId(index: number) {
  //   console.log(index);
  //   this.characters.splice(index, 1);
  // }
}
