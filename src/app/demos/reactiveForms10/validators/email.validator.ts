import { AbstractControl } from "@angular/forms";

export function emailValidator(control : AbstractControl)
{
    let value : string = control.value

    if(value.length < 6)
        return { email : "Votre email ne peux pas contenir moins de 6 caractères"}

        

    let testMatch = value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)

    if(testMatch && testMatch[0] == value)
        return null
    else
        return { email : "Ceci n'est pas une email valide"}

}