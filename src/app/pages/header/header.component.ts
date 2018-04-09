import { Component, OnInit } from '@angular/core';
import { LocalStorage } from '../../util/local.store.serve';
import { Router,NavigationStart, NavigationEnd, NavigationError } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  logged:boolean;
  username : string;
  constructor(private ls : LocalStorage, private router: Router){

    let info = this.ls.getObejct('logToken');

    // 监听路由生命周期
    router.events.subscribe((event) => { 
                if (event instanceof NavigationStart) {
                        // Show loading indicator
                        console.log('跳转前');
                         this.logged = info ? false : true;
                        this.username = info.userAccount || '';
                }
    
                if (event instanceof NavigationEnd) {

                    this.logged = true; 

                        // Hide loading indicator
                        console.log('跳转后');
                        this.logged = info ? false : true;
                        this.username = info.userAccount || '';


                }
    
                if (event instanceof NavigationError) {
                        // Hide loading indicator
                        // Present error to user
                        console.log(event.error);
                              }
                  })

              }


          logout(){
                this.ls.remove('logToken');
                let info = this.ls.getObejct('logToken');
                this.logged =  true;
                this.username = '';
           }


       ngOnInit() {}

}
