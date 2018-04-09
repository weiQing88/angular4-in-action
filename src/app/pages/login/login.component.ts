import { Component, OnInit } from '@angular/core';

import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

import { validateUserTelephone, validateUserPw } from '../../util/form.validate';

import { LoginServer } from '../../service/login.serve';

interface USERINFO<T>{  userAccount : T, userPassword : T };


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less'],
  providers : [ LoginServer ]
})



export class LoginComponent implements OnInit {
     public userInfo : USERINFO<any> = { userAccount : '', userPassword :'' };

      constructor(private logserve : LoginServer ){}

      doSubmit(form){
        if(form.valid){
             let param = form.value,
                 dateObje = new Date();
                 param.logDate = dateObje.getFullYear() + '-' + (dateObje.getMonth() + 1 ) + '-' + dateObje.getDate();
                 this.logserve.logined('logToken',param);

            }
      }

      ngOnInit() { }

}
