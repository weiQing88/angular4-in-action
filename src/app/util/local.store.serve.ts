import { Provider, Injectable} from '@angular/core';

@Injectable()
export class LocalStorage {
      public localStorage : any;

      constructor (){
            if(!localStorage){
                 throw new Error('当前浏览器不支持"localstora"');
            }
         this.localStorage = localStorage; 
      }

      public set(key : string, value : string) :void{
            this.localStorage[key] = value;
      }

      public get(key : string) : string {
            return this.localStorage[key] || false;
      }

      public setObject(key : string, value : any) : void {
            this.localStorage[key] = JSON.stringify(value);
      }

      public getObejct(key : string):any{
          return JSON.parse(this.localStorage[key] || '{}' )
      }

    public remove(key : string) : any{
          this.localStorage.removeItem(key);
    }

}