import { Injectable } from "@angular/core";
import { Router, CanActivate } from "@angular/router";

export class User {
    constructor(
        public email: string,
        public password: string) { }
}

var users = [
    new User("admin@admin.com", "adm9"),
    new User("user1@gmail.com", "a23")
];

@Injectable()
export class AuthenticationService implements CanActivate {

    canActivate() {
        if (localStorage.getItem("user")) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page
        this.router.navigate(["/login"]);
        return false;
    }

    constructor(
        private readonly router: Router) { }

    logout() {
        localStorage.removeItem("user");
        this.router.navigate(["/login"]);
    }

    login(user: any) {
        const authenticatedUser = users.find(u => u.email === user.email);
        if (authenticatedUser && authenticatedUser.password === user.password) {
            localStorage.setItem("user", authenticatedUser.email);
            this.router.navigate(["/"]);
            return true;
        }
        return false;

    }

    checkCredentials() {
        if (localStorage.getItem("user") === null) {
            this.router.navigate(["/login"]);
        }
    }
}