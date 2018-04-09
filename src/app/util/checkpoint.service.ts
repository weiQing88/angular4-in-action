import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { LocalStorage } from '../util/local.store.serve';

@Injectable()
export class CheckpointServer implements CanActivate {
        constructor(private ls : LocalStorage){}
        canActivate(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) :boolean{
             if(this.ls.get('logToken')){
                   return  false;  
             }else{
                  return true;
             }     
        }
}




