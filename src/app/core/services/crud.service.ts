import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { UserProfileService } from './user.service';
const BACKEND_URL= environment.apiUrl ;
@Injectable({
  providedIn: 'root'
})
export class CrudService {
  selectedData=[];
  dataOfSelectedCompany=[];
  dataForEditing=[];
  constructor(private userService: UserProfileService) {
}

  fetchData(url:string){return this.userService.getData(BACKEND_URL+url)}

  addData(url:string,data){return this.userService.postData(BACKEND_URL+url,data)}

  getDataById(url,id){return this.userService.getDataById(BACKEND_URL+url,id)}

  updateData(url:string,data){return this.userService.updateData(BACKEND_URL+url​,data)}

  saveSelectedData(data){
    this.selectedData=data;
  }

  saveCompanyIdAndBranchId(companyId,branchId){
    localStorage.setItem('companyId',companyId)
    localStorage.setItem('branchId',branchId)
  }
  getCompanyId(){
    return localStorage.getItem('companyId')
  }
  getBranchId(){
    return localStorage.getItem('branchId');
  }
}
