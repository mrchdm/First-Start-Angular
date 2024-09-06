import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AuthService } from '../../modules/login/services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export default class HeaderComponent implements OnInit {

  constructor(
    private authService: AuthService,
   
  ) {}

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  @Input()  isAuthenticated: boolean | undefined = this.authService.isAuthenticated();
  public login = this.authService.GetUserInfo();

  public logOut(): void {
    this.authService.LogOut();
    this.isAuthenticated = false;
   

  }
}