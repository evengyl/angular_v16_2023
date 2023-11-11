import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes2',
  templateUrl: './pipes2.component.html',
  styleUrls: ['./pipes2.component.css']
})
export class Pipes2Component {

  public allDatasInObject : any = {
    titlePromos : "Profitez de -50% sur tous les pignoufs",
    dateDebut : new Date(),
    remiseNet : 1999.99,
    tva : 0.21,
    tva2 : 1.3495
  }

  public powerPipe : number = 42



  textInfoi18n : string = `
  
  'fr-BE' pour l'appliquer il va faloloir faire les procédure de local i18n dans le appmodule
  --> registerLocaleData(localFr) avant le décorateur de appmodule
  -->  et ajouter ceci au provider : 
    providers: [
      { provide : LOCALE_ID, useValue : "fr-BE" }
    ]       
  --> et ne pas oubliez d'all import
  `

}
