import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  characterList: Character[] = []

  @Output()
  onDelete: EventEmitter<string> = new EventEmitter();


  onDeleteCharacterID(uuid?: string): void {
    if (!uuid) return;

    this.onDelete.emit(uuid); //Emitimos el valor del uuid
  }

}
