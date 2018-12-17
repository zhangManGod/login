import { FormGroup, FormControl } from "@angular/forms";

export function psdGroupCheck(info: FormGroup):any{

    let password:FormControl = info.get('newPassword') as FormControl;

    let confirm:FormControl = info.get('passwordConfirm') as FormControl;

    let valid:boolean = password.value === confirm.value;

    console.log(password.value);
    console.log(confirm.value)

    return valid?null:{password:true}
}