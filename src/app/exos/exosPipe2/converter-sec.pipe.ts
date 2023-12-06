import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'converterSec'
})
export class ConverterSecPipe implements PipeTransform {

  transform(value: number): string {


      let jours = Math.floor(value / 86400)
      value = value - (jours * 86400)
  
      let heures = Math.floor(value / 3600)
      value = value - (heures * 3600)  
      
      let minutes = Math.floor(value / 60)
      value = value - (minutes * 60)
  
      let seconds = value
  
      
  
      //partie stringify
      let joursST = jours.toString();
      let strForSJour = "Jour"
      if(jours > 1) strForSJour = "Jours"
  
      let heuresST =  heures.toString();
      if(heures < 10) heuresST = '0' + heuresST
      let strForSHeure = "Heure"
      if(heures > 1) strForSHeure = "Heures"
  
      let minutesST =  minutes.toString();
      if(minutes < 10) minutesST = '0' + minutesST
      let strForSMinuts = "Minute"
      if(minutes > 1) strForSMinuts = "Minutes"
  
      let secondsST =  seconds.toString();
      if(seconds < 10) secondsST = '0' + secondsST
      let strForSSecond = "Seconde"
      if(seconds > 1) strForSSecond = "Secondes"
      
  
  
      return `${joursST} ${strForSJour} - ${heuresST} ${strForSHeure} - ${minutesST} ${strForSMinuts} et ${secondsST} ${strForSSecond}`;
  }

}
