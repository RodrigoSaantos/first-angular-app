import { Component, EventEmitter, Input, input, output, Output } from '@angular/core';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  @Input({required: true}) id!: string;
  @Input({required: true}) avatar!: string;
  @Input({required: true}) name!: string;

  // @Output() select = new EventEmitter<string>();
  select = output<string>()

  get imagePath(): string {
    return `assets/users/${this.avatar}`;
  }

  onSelectedUser(): void {
    this.select.emit(this.id);
  }
}
