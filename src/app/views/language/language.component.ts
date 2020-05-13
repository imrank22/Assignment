import { Component, OnInit } from '@angular/core';
import { CountryService } from "../../services/country.service";
@Component({
  selector: 'app-language',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css']
})
export class LanguageComponent implements OnInit {
  language : any=[]
  constructor( private countServ: CountryService ) { 
     /* Getting the selected country alpha3code from subject in service */
    this.countServ.country.subscribe(
      resp=>{
        if(resp){
          this.getLanguageDetails(resp)
        }
      }
    )
  }

  ngOnInit(): void {
  }
  
  /* get the Language list from aplha3code of selected country */
  getLanguageDetails( code ){
    this.countServ.fetchCountryDetails(code).subscribe(
      resp=>{
        //Store response in a language array
        this.language= resp['languages']
      },
      error=>{
        console.error(error)
      }
    )
  }

}
