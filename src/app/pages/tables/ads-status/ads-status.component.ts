import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CrudService } from 'src/app/core/services/crud.service';

@Component({
  selector: 'app-ads-status',
  templateUrl: './ads-status.component.html',
  styleUrls: ['./ads-status.component.scss']
})
export class AdsStatusComponent implements OnInit {

  term:any;
  isLoading = false;
  usersData:any = [];
indexOfData:number;
getDataByIndex=[]
currentRoute="";
  constructor( private crudService: CrudService, private router: Router) {
  }

  ngOnInit(): void {
    this.isLoading = true;
   this.getAllAdsStatus();
    // this.subscription = this.crudService.startedEditing.subscribe((data)=>{
    //   // this.tableData = data;
    //   this.tableData = Object.keys(data).map(key => data[key]);
    //   // this.showData = data;
    //   // this.total = this.tableData.length;
    //   // this.pagination();
    // })
  }

  getAllAdsStatus(){
    this.crudService.fetchData('/api/AdminPanel/GetAdsStatus')
    .subscribe(response =>{
      this.usersData = response;
      console.log(response);
      this.isLoading=false;
    },error =>{
      console.log(error);
      this.isLoading = false;
    })
  }
  onToggle(data){
    // const check = data.adsAlloed
    console.log(data)
    this.isLoading=true;
    this.crudService.addData('/api/AdminPanel/AdsStatusToggle',data)
    .subscribe(response=>{
      console.log(response);
      this.getAllAdsStatus();
      this.isLoading=false;
    },error =>{
      console.log(error);
      this.isLoading=false;
    })
  }
  onEdit(index,data){
    console.log('data of user data ',index,data);
    this.crudService.saveSelectedData(data);
    this.router.navigate(['/AdsForm'], { queryParams: {mode: 'edit'}});

    // console.log(this.getDataByIndex);
  }

  onAddData(){
    // to navigate and open in another tab.
    this.router.navigate(['/AdsForm'], { queryParams: {mode: 'new'}});


    // to open in new window
    // this.router.navigate([]).then(result=>{window.open('/userCompanyForm','_blank')});
  }
  onDelete(id){
    // call delete api
    console.log(id);
  }
  onView(index,data){

    this.crudService.saveSelectedData(data);
    this.router.navigate(['/AdsForm'], { queryParams: {mode: 'view'}});
  }

}