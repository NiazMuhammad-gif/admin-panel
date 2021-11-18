import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CrudService } from 'src/app/core/services/crud.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-transtype-form',
  templateUrl: './transtype-form.component.html',
  styleUrls: ['./transtype-form.component.scss']
})
export class TranstypeFormComponent implements OnInit {

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
  user: any = { name: ""};
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
        this.router.navigate(['/TransTypeSetup']);
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
        name: this.userSelectedData['packName'],
      });
      console.log('true ');
    },  );
    }
    else {
      this.editMode =false;
      this.viewMode= false;
      this.newMode = true;
        setTimeout(()=>{
          this.slForm.control.patchValue({
            name: '',
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
    const url = '/api/AdminPanel/CreateTransType'
    this.isLoading=true;
    const data = {
      CreateDate: '',
      CreateUser: '',
      isvalid:true,
      name:form.value.name,
    }
    this.crudService.addData(url,data).subscribe(response=>{
      console.log(response);
      this.isLoading=false;
      this.successDialog(response['message']);
      this.router.navigate(['/TransTypeSetup']);
    },error =>{
      console.log(error);
      this.isLoading=false;
      this.errorDialog(error);
      this.router.navigate(['/TransTypeSetup']);
    });

  }
  // else{
  //   const data = {
  //     email: form.value.email,
  //     password:form.value.password
  //   }
  //   console.log(data);
  //   this.crudService.addData('/api/Authenticate/ResetPass',data)
  //   .subscribe(response =>{
  //     console.log(response);
  //     this.successDialog(response['message']);
  //   },error=>{
  //     console.log(error);
  //     this.errorDialog(error);
  //     this.router.navigate(['/TransTypeSetup']);
  //   })
  //   // this.crudService.editMode.next(false);
  //   this.slForm.reset();

  // }
  }
onClear(f: NgForm){
  this.shortName = '';
  this.countryName = '';
  this.cityName='';
  f.reset();
  this.router.navigate(['/TransTypeSetup']);
}

}
