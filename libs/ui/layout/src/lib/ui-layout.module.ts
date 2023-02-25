import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PageLayoutComponent } from './page-layout/page-layout.component';

@NgModule({
  imports: [CommonModule],
  declarations: [HeaderComponent, FooterComponent, PageLayoutComponent],
})
export class UiLayoutModule {}
