import {Component, OnInit} from '@angular/core';
import { navItems } from '../../_nav';
import { CountryService } from "../../services/country.service";
import { BehaviorSubject, Subject } from 'rxjs';
import { Event, NavigationEnd, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './default-layout.component.html'
})
export class DefaultLayoutComponent implements OnInit{
  public sidebarMinimized = false;
  public navItems = navItems;
  country_data : any =[];
  selected_country : string=''
  breadcrumb : string
  constructor( private countServ : CountryService, private router: Router, private route: ActivatedRoute ) {
    this.router.events.subscribe( event =>{
      if (event instanceof NavigationEnd){
        this.selectedCountry()
        if( router.url == '/home' ){
      
          this.breadcrumb = 'Home - Country Details'
        }
        else if( router.url == '/language-list' ){
          this.breadcrumb = 'Language List'
        }
        else if( router.url == '/currency-list' ){
          this.breadcrumb = 'Currency List'
        }
      }
    })
    

  }

  ngOnInit(){
    this.getListOfCountries()
  }

  toggleMinimize(e) {
    this.sidebarMinimized = e;
  }

  getListOfCountries(){
    this.countServ.fetchCountryList().subscribe(
      data=>{
       this.country_data = data
      },
      error=>{
        console.error(error)
      }
    )
  }

  selectedCountry(){
    this.countServ.country.next( this.selected_country )
  }

}
