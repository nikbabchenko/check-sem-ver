import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import { UiLayoutModule } from '@medium-ui/layout';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [CommonModule, UiLayoutModule, RouterModule],
  declarations: [MainComponent],
  exports: [MainComponent],
})
export class FeaturesMainModule {}
