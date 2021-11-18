import { DatePipe } from '@angular/common';
import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from 'src/app/core/services/auth.service';
import { CrudService } from 'src/app/core/services/crud.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-ads-form',
  templateUrl: './ads-form.component.html',
  styleUrls: ['./ads-form.component.scss'],
  providers:[DatePipe]
})
export class AdsFormComponent implements OnInit {

  @ViewChild('f',{static:false}) slForm: NgForm;
  tableData=[];
  adsData = [];
  notShowId=true;
  shortCode='';
  name='';
  fileUrl = '';
  indexOfData=0;

  editMode = false;
  viewMode = false;
  sampleData = [true,false];
  userId = '';
  // imageUrl = 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg';
  imageUrl = '';
  notfound= "../../../../assets/images/notFoundImage.jpg";
  
  showImage='';
  mode = '';
  isLoading=false;
  newMode=false;
  enable=true;
  imgURL: string | ArrayBuffer;
  imagePath: any;
  constructor(private sanitizer: DomSanitizer,private route: ActivatedRoute ,private crudService:CrudService ,private router: Router,private pipe: DatePipe,private authService: AuthenticationService) {

    this.route.queryParams.subscribe(params => {
      this.mode = params['mode'];
      console.log('mode  ===> ', this.mode);
    });
  }
  ngOnInit(): void {
    this.userId = this.authService.getUserId();


    if(this.mode ==='view' || this.mode == 'edit'){
      this.adsData = this.crudService.selectedData;
      console.log(this.adsData);
      if(this.adsData.length == 0){
        this.router.navigate(['/AdsSetup']);
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
      this.imageUrl=this.adsData['imagePath'];
      this.imgURL=this.adsData['imagePath'];
      setTimeout(() =>{
        this.slForm.control.patchValue({
          id:this.adsData['id'],
          addName: this.adsData['addName'],
          adsDetails: this.adsData['adsDetails'],
          amount: this.adsData['amount'],
          imagePath: this.adsData['imagePath'],
            isvalid: this.adsData['isvalid'],
            CreateDate: this.pipe.transform(this.adsData ['create_date'],'yyyy-MM-dd'),
            CreateUser: this.userId,
            image: this.adsData['image'],
        });
      }, );

    }

    else{
      this.editMode = this.viewMode = false;
      this.isLoading=false;
      setTimeout(()=>{
        this.slForm.control.patchValue({
          id:'',
          addName: '',
          adsDetails: '',
          amount: null,
          imagePath: '',
          isvalid: '',
            CreateDate: this.pipe.transform(new Date(),'yyyy-MM-dd'),
            CreateUser: this.userId,
            image: '',
        })
    }, );
    }
  }

  changeStatus(){
    this.enable=!this.enable;
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
onFileSelect(event) {
  if (event.target.files.length > 0) {
    const file = event.target.files[0];
    console.log(event.target.value);
    this.showImage=event.target.value;
    this.imageUrl=file;
    var reader = new FileReader();
    this.imagePath = event.target.files;
    reader.readAsDataURL(event.target.files[0]); 
    reader.onload = (_event) => { 
      this.imgURL = reader.result; 
  }
}
}

getSantizeUrl(){
  return this.sanitizer.bypassSecurityTrustUrl(this.showImage);
}
onAddData(form : NgForm){
  const formData = new FormData();
  formData.append('addName',form.value.addName);
  formData.append('adsDetails',form.value.adsDetails);
  formData.append('amount',form.value.amount);
  formData.append('imagePath',form.value.imagePath);
  formData.append('isvalid',form.value.isvalid);
  formData.append('CreateDate',this.pipe.transform(new Date(),'yyyy-MM-dd'));
  formData.append('CreateUser',this.userId);
  formData.append('image',this.imageUrl);

  if(!this.editMode){

    // console.log(form.value);

    // form.value.create_user = this.userId;
    // form.value.clogo_image = this.imageUrl;
    console.log(form.value)
    // formData.forEach(name =>{
    //   console.log(name);
    // })
    const url="/api/AdminPanel/CreateAd";
    this.isLoading=true;
    this.crudService.addData(url,formData)
    .subscribe(response =>{
      this.successDialog(response['message']);
      console.log(response);
      this.isLoading=false;
      this.router.navigate(['/AdsSetup']);
    },error =>{
      console.log(error);
      this.isLoading=false;
      this.errorDialog(error);
      this.router.navigate(['/AdsSetup']);
    })

  }
  else{
  this.isLoading=true;
  this.crudService.updateData('/api/AdminPanel/UpdateAd',formData)
  .subscribe(response =>{
    console.log(response)
    this.isLoading=false;
    this.successDialog(response['message']);
    this.router.navigate(['/AdsSetup']);
    this.slForm.reset();
  },error =>{
    console.log(error);
    this.isLoading=false;
    this.errorDialog(error);
    this.router.navigate(['/AdsSetup']);
  this.slForm.reset();
  })
  }
  }
onClear(f: NgForm){
  this.shortCode = '';
  this.name = '';
  f.reset();
  this.router.navigate(['/AdsSetup']);
}

}
