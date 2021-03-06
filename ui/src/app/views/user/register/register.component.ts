import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";
import { User } from "../../../models/user.model";
import { UserService } from "../../../controllers/user/user.service";
import { ValidationService } from "../../../services/validation/validation.service";

// validations
import * as validations from "./form-validations.json";

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

    @Input("model")
    public model: User = new User();
    
    private errorMessages: Array<string> = [];

    constructor(private _ValidationService: ValidationService,
        private _UserService: UserService,
        private _Router: Router) {
    }

    public ngOnInit(): void {
    }

    private register(dialog): void {
        if (!this._ValidationService.validate(this.model, validations)) {
            this.errorMessages = this._ValidationService.errorMessages;
            dialog.open();
            return;
        }
        if (!this.model.username) {
            this.model.username = this.model.email;
        }
        this._UserService
            .register(this.model)
            .then((response: User) => {
                this._Router.navigate(['home']);
            })
            .catch((error: any) => {
                console.log(error);
            });
    }
}