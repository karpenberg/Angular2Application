import { Component } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service'

@Component({
    selector: 'login-form',
    providers: [AuthenticationService],
    templateUrl : "./app/home/home.component.html"
})

export class HomeComponent {
    constructor(
        private readonly authService: AuthenticationService,
           ) { }

    ngOnInit() {
    }

    logout() {
        this.authService.logout();
    }
}