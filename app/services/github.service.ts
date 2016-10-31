import {Injectable} from '@angular/core';
import {Http, Headers} from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class GithubService{
	private username:string;
    private client_id ='727abeccfad25224b12f';
    private client_secret = 'a776983ff4e17f04f5e4d4b80492c0c07d154cc4';

    constructor(private _http: Http) {
        console.log('Github service ready');
        this.username = 'sajiddesigner';
    }

    getUser() {
       return this._http.get('http://api.github.com/users/'+this.username+'?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res=>res.json());
    }

    getRepos() {
        return this._http.get('http://api.github.com/users/'+this.username+'/repos?client_id='+this.client_id+'&client_secret='+this.client_secret).map(res=>res.json());
    }

    updateUser(username:string){
        this.username=username;
    }
}