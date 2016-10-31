import { Component } from '@angular/core';
import {GithubService} from '../services/github.service';

@Component({
    moduleId: module.id,
    selector: 'profile',
    templateUrl: 'profile.component.html'
})
export class ProfileComponent {
    user:any
    repos:any[];
    username:string;
    constructor( private _githubService: GithubService){
       this.user=false;
    }

    searchUser(event:any){
      // Enter Key Code is 13
        if(event.keyCode=="13"){
            this._githubService.updateUser(this.username);
            this._githubService.getUser().subscribe(user=>{
                this.user=user;
            });

            this._githubService.getRepos().subscribe(repos=>{
                this.repos=repos;
            });
        }
    }
}
