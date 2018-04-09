import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';    // 必须要在模块中添加 CommonModule

import { AboutComponent } from './about.component';
import { AboutItemComponent } from './about.item.component';

@NgModule({
     declarations : [
        AboutComponent,
        AboutItemComponent 
     ],
     imports : [ CommonModule ],
     exports : [AboutComponent]
})

export class AboutModule {}