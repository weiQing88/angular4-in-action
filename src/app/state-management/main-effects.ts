import { Effect, Actions } from '@ngrx/effects';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable()
export  class MainEffects {
      constructor(private action$ : Actions ){}
}