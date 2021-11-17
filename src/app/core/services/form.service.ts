import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { UserProfileService } from './user.service';
const BACKEND_URL= environment.apiUrl ;
@Injectable({
  providedIn: 'root'
})
export class FormService {
  isLoading= new BehaviorSubject<boolean>(false)
  tableData: any=[]
  indexOfData= new BehaviorSubject<number>(0);
  selectedData=[];
  currentRoute="";
  viewData = new BehaviorSubject<boolean>(false);
  editMode=new BehaviorSubject<boolean>(false);
  startedEditing = new BehaviorSubject<[]>([]);
  startedEditing1 = new BehaviorSubject<[]>([]);
  constructor(private router: Router,private http: HttpClient,private userService: UserProfileService) {
}

  fetchData(url:string){
    this.isLoading.next(false);
    this.startedEditing.next([]);
   return this.userService.getData(BACKEND_URL+url)
   

  }
  fetchData1(url:string){
    this.isLoading.next(false);
    this.startedEditing1.next([]);
    this.userService.getData(BACKEND_URL+url)
    .subscribe(response =>{
      this.startedEditing1.next(<any>response);
      this.tableData = response;
      console.log(response);
      this.isLoading.next(true);
    },error =>{
      console.log(error);
  } );

  }
  addData(url:string,data){
    this.userService.postData(BACKEND_URL+url,data)
    .subscribe(
      response=>{
        console.log('checking response',response);
        
      },error =>{
          console.log('error', error);
      }        
    );
    this.tableData.push(data);
    this.startedEditing.next(this.tableData.slice())
  }
  getDataById(index){
    this.indexOfData.next(index);
    const data = this.tableData[index];
    this.startedEditing.next(data);
    // return  Object.assign([],this.tableData[index]);
    return data;
  }
  updateData(index:number,data){
    this.tableData[index]=data;
    
    this.userService.updateData(`${BACKEND_URL}​​/api​/Admin​/UpdateCompany`,data).subscribe(response =>{
      console.log(response)
    },error =>{
      console.log(error);
    })
     this.tableData[index]= data;  
    this.startedEditing.next(this.tableData.slice())
  }
  deleteItemByIndex(index){
    this.tableData.splice(index,1);
    this.startedEditing.next(this.tableData.slice())
  }
  emptySelectedData(){
    this.selectedData=[];
  }
}
