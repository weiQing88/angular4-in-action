import { Injectable }  from '@angular/core';
import { LocalStorage } from '../util/local.store.serve';
import { Router } from '@angular/router';


interface INFOSTRUCTURE {
    userAccount : string,
    userPassword : string | number,
    logDate? : any
}


@Injectable()
export class LoginServer{
      constructor(private ls : LocalStorage,private router : Router){}
      logined(key : string,info :INFOSTRUCTURE) {
                 this.ls.setObject(key,info); 
                // 登录成后跳转回指定页面。
                this.router.navigateByUrl('/');    
      }

}



