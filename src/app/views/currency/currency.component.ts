import { Component, OnInit } from '@angular/core';
import { CountryService } from "../../services/country.service";

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css']
})
export class CurrencyComponent implements OnInit {
  currency: any=[]
  constructor(private countServ: CountryService) {
    /* Getting the selected country alpha3code from subject in service */
    this.countServ.country.subscribe(
      resp=>{
        if(resp){
          this.getCurrencyList( resp )
        }
      }
    )
   }

  ngOnInit(): void {
  }

  /* get the currency list from the code of selected country */
  getCurrencyList( code ){
    this.countServ.fetchCountryDetails( code ).subscribe(
      resp=>{
        /* Storing the currencies data into a currency array */
        this.currency= resp['currencies']
      },
      error=>{
        console.error(error)
      }
    )
  }

}
