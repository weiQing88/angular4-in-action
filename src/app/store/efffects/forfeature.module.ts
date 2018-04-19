import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';

@NgModule({
    imports: [EffectsModule.forFeature([])]
})


// EffectsModule.forFeature( ) 可以在任何ng模块使用（导入）无论是根模块(AppModule)，还是任何一个功能模块。
export class ForFeatureModule {}