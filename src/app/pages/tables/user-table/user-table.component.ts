import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { CrudService } from 'src/app/core/services/crud.service';

@Component({
  selector: 'app-user-table',
  templateUrl: './user-table.component.html',
  styleUrls: ['./user-table.component.scss']
})
export class UserTableComponent implements OnInit {
  term:any;
  isLoading = false;
  usersData:any = [];
indexOfData:number;
getDataByIndex=[]
currentRoute="";
subscription:Subscription;
  constructor( private crudService: CrudService, private router: Router) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.crudService.fetchData('/api/Authenticate/GetAllUser')
    .subscribe(response =>{
      this.usersData = response;
      console.log(response);
      this.isLoading=false;
    },error =>{
      console.log(error);
      this.isLoading = false;
    })
    // this.subscription = this.crudService.startedEditing.subscribe((data)=>{
    //   // this.tableData = data;
    //   this.tableData = Object.keys(data).map(key => data[key]);
    //   // this.showData = data;
    //   // this.total = this.tableData.length;
    //   // this.pagination();
    // })
  }
  onEdit(index,data){
    console.log('data of user data ',index,data);
    this.crudService.saveSelectedData(data);
    this.router.navigate(['/userForm'], { queryParams: {mode: 'edit'}});

    // console.log(this.getDataByIndex);
  }

  onAddData(){
    // to navigate and open in another tab.
    this.router.navigate(['/userForm'], { queryParams: {mode: 'new'}});


    // to open in new window
    // this.router.navigate([]).then(result=>{window.open('/userCompanyForm','_blank')});
  }
  onDelete(id){
    // call delete api
    console.log(id);
  }
  onView(index,data){

    this.crudService.saveSelectedData(data);
    this.router.navigate(['/userForm'], { queryParams: {mode: 'view'}});
  }

}