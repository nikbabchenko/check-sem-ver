import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { LoginFacade } from '../+state/login.facade';

@Component({
  selector: 'mm-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [LoginFacade],
})
export class LoginComponent implements OnInit {
  constructor(private facade: LoginFacade) {}

  ngOnInit() {
    this.facade.init();
  }
}
