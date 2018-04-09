import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { validateUserTelephone, validateUserPw } from '../../util/form.validate';
import { LoginServer } from '../../service/login.serve';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.less']
})


export class RegisterComponent implements OnInit {

  registerForm : FormGroup;

   constructor(private fb : FormBuilder, private logserve : LoginServer ){
      // 表单自定义验证
      this.registerForm = new FormGroup({
                  userAccount: new  FormControl('', validateUserTelephone),
                  userPassword: new  FormControl('', Validators.required)
              });
    }

    doSubmit(){
      if(this.registerForm.valid){
          let param =  this.registerForm.value,
              dateObje = new Date();
              param.logDate = dateObje.getFullYear() + '-' + (dateObje.getMonth() + 1 ) + '-' + dateObje.getDate();
              this.logserve.logined('logToken',param);

      }
}

    ngOnInit() {}

}
