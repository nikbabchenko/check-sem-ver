import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';

import { LoginEffects } from './+state/login.effects';
import { LoginFacade } from './+state/login.facade';
import * as fromLogin from './+state/login.reducer';
import { featuresLoginContainerRoutes } from './lib.routes';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    StoreModule.forFeature(fromLogin.LOGIN_FEATURE_KEY, fromLogin.loginReducer),
    EffectsModule.forFeature([LoginEffects]),
    RouterModule.forChild(featuresLoginContainerRoutes),
  ],
  providers: [LoginFacade],
})
export class LoginModule {}
