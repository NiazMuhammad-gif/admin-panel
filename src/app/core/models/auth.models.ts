export class User {
    id: number;
    username: string;
    password: string;
    firstName?: string;
    lastName?: string;
    token?: string;
    email: string;
}

export interface AuthData {
    username: string;
    email?:string;
    password: string;
  }
  

// export class User {
//     constructor(
//       public email: string,
//       public id: string,
//       private _token: string,
//       private _tokenExpirationDate: Date
//     ) {}
  
//     get token() {
//       if (!this._tokenExpirationDate || new Date() > this._tokenExpirationDate) {
//         return null;
//       }
//       return this._token;
//     }
//   }