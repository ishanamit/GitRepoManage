import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http'; 
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

@Injectable()

export class GitService {
    username:any;
    constructor(private _http:Http){
        //console.log('github service');
    }

        getUser(){
            return this._http.get('https://api.github.com/users/'+this.username)
            .map(res => res.json()).catch(this.errorHandler);
        }

        getRepos(){
            return this._http.get('https://api.github.com/users/'+this.username+'/repos')
            .map(res => res.json()).catch(this.errorHandler);
        }

        updateusername(username:string){
            this.username = username
        }
        errorHandler(error: Response){         console.error(error);        
             return Observable.throw(error || "Server Error");     
        } 
}
        

