import { HttpClient, HttpInterceptor } from '@angular/common/http'
import { AsyncValidatorFn } from '@angular/forms'
import { map, switchMap } from 'rxjs/operators'
import { timer } from 'rxjs'


export class CountriesValidator{

    static readonly URL : string = "https://restcountries.com/v3.1/all"


    public static checkCountry(client : HttpClient) : AsyncValidatorFn
    {
        return (control) => {
            return timer(200).pipe(
                switchMap(() => client.get<any>(this.URL)
                    .pipe(
                        map(
                            ResponseAPI => { 
                                console.log(ResponseAPI)
                                if(ResponseAPI.find((country : any) => country.name.common == capitalizeFirstLetter(control.value)))
                                    return null
                                else
                                    return { countryExist : false }
                            }
                        )
                    )
                )
            ) 
        }
    }
}

function capitalizeFirstLetter(string  :string)
{
    return string.charAt(0).toUpperCase() + string.slice(1)
}