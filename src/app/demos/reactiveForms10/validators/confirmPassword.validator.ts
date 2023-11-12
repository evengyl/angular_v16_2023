import { AbstractControl } from "@angular/forms";

export function confirmPasswordValidator(controls : AbstractControl){

    let password1 = controls.value.password
    let password2 = controls.value.passwordConfirm

    if(password1 && password2)
    {
        if(password1 == password2)
            return null
        else
            return { passwordVerify : "Les deux mots de passe ne correspondent pas"}
    }
    else   
        return { passwordVerify : "Champ obligatoire"}
}