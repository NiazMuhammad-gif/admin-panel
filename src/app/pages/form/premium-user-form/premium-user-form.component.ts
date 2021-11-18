import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/core/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-premium-user-form',
  templateUrl: './premium-user-form.component.html',
  styleUrls: ['./premium-user-form.component.scss']
})
export class PremiumUserFormComponent implements OnInit {

  @ViewChild('f',{static:false}) slForm: NgForm;
  isLoading=false;
  userSelectedData = [];
  shortName='';
  countryName='';
  cityName='';
  indexOfData=0;
  editMode = false;
  viewMode = false;
  mode = '';
  newMode = false;
  userList:any=[];
  packList:any=[];
  user: any = { name: "", email: "",password:null,phoneNo:null };
  constructor(private route: ActivatedRoute,private crudService: CrudService,private router: Router) {
    this.route.queryParams.subscribe(params => {
      this.mode = params['mode'];
      console.log('mode  ===> ', this.mode);
    });
   }
  ngOnInit(): void {

    if(this.mode ==='view' || this.mode==='edit'){
      this.userSelectedData = this.crudService.selectedData

      if(this.userSelectedData.length==0){
        this.router.navigate(['/PremiumUserSetup']);
      }
      if(this.mode === 'view'){
        this.viewMode = true;
        this.editMode = false;
        this.newMode = false;
      }
      // this condition is for edit mode.
      else{
        this.viewMode = false;
        this.editMode = true;
        this.newMode = false;
      }
      setTimeout(()=>{
      this.slForm.control.patchValue({
        username: this.userSelectedData['userName'],
        email:this.userSelectedData['email'],
        password: ''
      });
      console.log('true ');
    },  );
    }
    else {
      this.editMode =false;
      this.viewMode= false;
      this.newMode = true;

      this.isLoading=true;
      this.crudService.fetchData('/api/Authenticate/GetAllUser').subscribe(response =>{
        this.userList=response;
        console.log(response);
        this.isLoading=false;
      },error=>{
        console.log(error);
        this.isLoading=false;
      })

      this.isLoading=true;
      this.crudService.fetchData('/api/AdminPanel/GetAllPremiumPack').subscribe(response =>{
        this.packList=response;
        console.log(response);
        this.isLoading=false;
      },error=>{
        console.log(error);
        this.isLoading=false;
      })
        setTimeout(()=>{
          this.slForm.control.patchValue({
            userId: '',
            premiumPackId: '',
          })

      }, );
        }


}

successDialog(title:string) {
  Swal.fire({
    position: 'top-end',
    icon: 'success',
    title: title,
    showConfirmButton: false,
    timer: 1500
  });
}
errorDialog(title) {
  Swal.fire({
    position: 'top-end',
    icon: 'error',
    title: title,
    showConfirmButton: false,
    timer: 1500
  });
}

onAddData(form: NgForm){

  if(!this.editMode){
    console.log(form.value);

     let premiumPack;
     let user;
     this.isLoading=true;
    this.crudService.getDataById('/api/AdminPanel/GetPremiumPackbyId?Id=',form.value.premiumPackId)
    .subscribe(response =>{
      premiumPack=response;
      console.log(response[0]);
      user = this.userList.filter(userData =>userData.id == form.value.userId)

    const url = '/api/AdminPanel/CreatePremiumUser'

    const premiumUserData = {
      createDate:'',
      createUser:'',
      isvalid:true,
      userId: form.value.userId,
      // user: user[0],
      premiumPackId:form.value.premiumPackId,
      // premiumPack:premiumPack[0]
    }
    console.log(premiumUserData)
    this.crudService.addData(url,premiumUserData).subscribe(response=>{
      console.log(response);
      this.isLoading=false;
      this.successDialog(response['message']);
      this.router.navigate(['/PremiumUserSetup']);
    },error =>{
      console.log(error);
      this.isLoading=false;
      this.errorDialog(error);
      this.router.navigate(['/PremiumUserSetup']);
    });

    },error=>{
      console.log(error);
      this.isLoading=false;
    })

   

  }
  else{
    const data = {
      email: form.value.email,
      password:form.value.password
    }
    console.log(data);
    this.crudService.addData('/api/Authenticate/ResetPass',data)
    .subscribe(response =>{
      console.log(response);
      this.successDialog(response['message']);
    },error=>{
      console.log(error);
      this.errorDialog(error);
      this.router.navigate(['/PremiumUserSetup']);
    })
    // this.crudService.editMode.next(false);
    this.slForm.reset();

  }
  }
onClear(f: NgForm){
  this.shortName = '';
  this.countryName = '';
  this.cityName='';
  f.reset();
  this.router.navigate(['/PremiumUserSetup']);
}

}
