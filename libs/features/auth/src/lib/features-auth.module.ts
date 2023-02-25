import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featuresLoginContainerRoutes } from './lib.routes';
import { LoginComponent } from './login/login.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import * as fromLogin from './+state/login.reducer';
import { LoginEffects } from './+state/login.effects';
import { LoginFacade } from './+state/login.facade';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(featuresLoginContainerRoutes),
    StoreModule.forFeature(fromLogin.LOGIN_FEATURE_KEY, fromLogin.loginReducer),
    EffectsModule.forFeature([LoginEffects]),
  ],
  declarations: [LoginComponent],
  providers: [LoginFacade],
})
export class FeaturesAuthModule {}
