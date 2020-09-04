import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userInfos = new FormGroup({
    user: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private userService : UserService) { }

  ngOnInit(): void {  
  }

  onSubmit() {
    
    //this.userService.log(this.userInfos.user, this.userInfos.password);
    
  }

}
