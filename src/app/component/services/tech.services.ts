import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'; 

import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
@Injectable()


export class TechService{
    private language:any;

    constructor(private _http:Http){}
    
        
    updatelanguage(language:any){
        this.language = language;
    }

    getLanguageRepo(){
        return this._http.get('https://api.github.com/search/repositories?q='+this.language+'&per_page=20')
        .map(res => res.json()).catch(this.error1Handler);
    }
    error1Handler(error: Response)
    {         console.error(error);   
              return Observable.throw(error || "Server Error");    
    } 
}


    

