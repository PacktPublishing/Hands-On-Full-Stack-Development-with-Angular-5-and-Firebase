import {Attribute, Directive, forwardRef} from '@angular/core';
import {AbstractControl, NG_VALIDATORS, Validator} from '@angular/forms';

@Directive({
    selector: '[passwordEqual][formControlName],[passwordEqual][formControl],[passwordEqual][ngModel]',
    providers: [
        {provide: NG_VALIDATORS, useExisting: forwardRef(() => PasswordEqualValidator), multi: true}
    ]
})
export class PasswordEqualValidator implements Validator {
    constructor(@Attribute('passwordEqual') public passwordEqual: string) {
    }

    validate(control: AbstractControl): { [key: string]: any } {
        const retypePassword = control.value;

        const originalPassword = control.root.get(this.passwordEqual);

        // original & retype password is egual
        return (originalPassword && retypePassword !== originalPassword.value)
            ? {passwordEqual: false} : null;
    }
}
