import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';

import { User } from '../../object/user';
import { Users } from '../../../mocks/user-mock';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  users : User[];
  currentUser: User;
  isConnected: boolean;

  constructor() {
  }
  
  ngOnInit(): void {  
    this.isConnected = false;
    this.users = Users;
  }


  log(name: string, password: string): boolean{
    this.users.forEach(element => {
      if(element.name == name && element.password == password) this.currentUser = element;
    });

    return this.currentUser.id != null;

  }

}
