import { Component, OnInit } from '@angular/core';
import { CountryService } from "../../services/country.service";
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  country: any=[]
  constructor( private countServ : CountryService ) {
    /* Getting the selected country alpha3code from subject in service */
    this.countServ.country.subscribe(
      resp=>{
        if(resp){
          this.getCountryDetails( resp )
        }
      }
    )
   }

  ngOnInit(): void {
  }

  /* get the Country Details from aplha3code of selected country */
  getCountryDetails( aplha3code ){
    this.countServ.fetchCountryDetails(aplha3code).subscribe(
      resp=>{
        //Store response in a country array
        this.country = resp
      },
      error=>{
        console.error(error)
      }
    ) 
  }

}
