import { Component, computed, signal } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';

const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  selectedUser = signal(DUMMY_USERS[randomUserIndex]);
  imagePath = computed(() => 'assets/users/' + this.selectedUser().avatar);

  // get imagePath(): string {
  //   return 'assets/users/' + this.selectedUser().avatar;
  // }

  onSelectedUser(): void {
    const randomUserIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomUserIndex]);
  }
}
