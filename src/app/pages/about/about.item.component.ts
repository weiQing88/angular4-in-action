import { Component, Input} from '@angular/core';

@Component({
     selector : 'about-item',
     templateUrl : './about.item.component.html',
     styleUrls: ['./about.component.less']
})

export class AboutItemComponent {
     @Input() itemdata : Object = {};
     showed : boolean = false;

     showAction(){
           this.showed = ! this.showed;
     }
      
}

