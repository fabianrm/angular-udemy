import { Component } from '@angular/core';
import { v4 as uuid } from "uuid";
import { DbzService } from '../../services/dbz.service';
import { Character } from '../../interfaces/character.interface';

console.log(uuid());


@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.css'
})
export class MainPageComponent {

  constructor(private dbzService: DbzService) { }


  get characters(): Character[] {

    return [...this.dbzService.characters]; //retornamos una copia de characters

  }

  deleteCharacter(id: string): void {
    this.dbzService.deleteCharacterById(id);
  }

  newCharacter(character: Character): void {
    this.dbzService.addCharacter(character);
  }


}
