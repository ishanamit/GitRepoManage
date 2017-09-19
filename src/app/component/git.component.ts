import { Component } from '@angular/core';

import { GitService } from './services/git.services';

@Component({
  selector: 'my-git',
  templateUrl: './git.component.html',
  styleUrls: ['./git.component.css'],
  providers: [ GitService ],
})
export class GitComponent {
    user:any;
    repos:any;
    username: string;
    errorMsg:string;
   
    constructor(private _gitservice: GitService){}


    
    browse(){
        this._gitservice.updateusername(this.username);

        //console.log(this.username);
        this._gitservice.getUser().subscribe(user => {
            //console.log(user);
            this.user = user,usererror=>this.errorMsg=usererror; 
        })

        this._gitservice.getRepos().subscribe(repos => {
            //console.log(repos);
            this.repos = repos,usererror=>this.errorMsg=usererror; 
        })
    }
    

}