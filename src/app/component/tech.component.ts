import { Component } from '@angular/core';
import { TechService } from './services/tech.services';


@Component({
    selector: 'my-tech',
    templateUrl: './tech.component.html',
    styleUrls: ['./tech.component.css'],
    providers: [ TechService ],
})



export class TechComponent{
    langs:any;
    language: any;
    error1Msg:string;

    constructor(private _techservice: TechService){
        console.log("loading....");

    }
    searchlan(){
    
    this._techservice.updatelanguage(this.language);
    
    this._techservice.getLanguageRepo().subscribe(langs => {
        this.langs = langs.items,user1error=>this.error1Msg=user1error;
    });
    }
}
