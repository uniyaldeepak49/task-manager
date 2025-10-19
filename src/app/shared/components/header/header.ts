import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CommonService } from '../../../services/common-service';
import { AuthService } from '../../../services/auth-service';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'code-for-beginners-header',
  imports: [RouterLink, RouterLinkActive, AsyncPipe],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  private commonService = inject(CommonService);
  private router = inject(Router);
  private authService = inject(AuthService);
  isLoggedIn$ = this.authService.isLoggedIn$;
  onLogout(): void {
    this.commonService.clearLocalStorage();
    this.authService.userLoginToken.next(false);
    this.router.navigate(['/home']);
  }
}
