import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { User } from '../models/auth.models';

@Injectable({ providedIn: 'root' })
export class UserProfileService {
    constructor(private http: HttpClient) { }

    // getAll() {
    //     return this.http.get<User[]>(`https://posec.8mindsolutions.com/api/Authenticate/login`);
    //     // return this.http.get<User[]>(`/api/login`);
    // }

    // register(user: User) {
    //     return this.http.post(`/users/register`, user);
    // }


    getData(apiUrl:string){
        return this.http.get(apiUrl);
    }
    getDataById(apiUrl:string,id){
        return this.http.get(apiUrl+id);

    }
    postData(apiUrl:string,data){
        return this.http.post(apiUrl,data);

    }
    updateData(apiUrl:string,data){

        return this.http.patch(apiUrl,data);
    }
    
}
