import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';


@Component({
  selector: 'dbz-add-character',
  templateUrl: './add.component.html',
  styleUrl: './add.component.css'
})
export class AddComponent {

  @Output()
  onNewCharacter: EventEmitter<Character> = new EventEmitter();

  character: Character = { name: 'Trunks', power: 500 };

  emitCharacter(): void {

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character); //Emitimos el character al padre

    //Reseteamos los valores
    this.character = { name: '', power: 0 };
  }



}
