import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featuresLoginContainerRoutes } from './lib.routes';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [CommonModule, RouterModule.forChild(featuresLoginContainerRoutes)],
  declarations: [LoginComponent],
})
export class FeaturesLoginContainerModule {}
