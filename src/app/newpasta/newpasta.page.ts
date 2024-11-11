import { Component, OnInit } from '@angular/core';
import { FoodserviceService } from '../foodservice.service';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-newpasta',
  templateUrl: './newpasta.page.html',
  styleUrls: ['./newpasta.page.scss'],
})
export class NewpastaPage implements OnInit {

  new_url = ""
  new_name = ""
  new_desc = ""
  new_spicy = false
  new_price = 0
  arrPrice: number[] = [] // isi array select
  public alertButtons = ['OK']
  
  base64:any
  imageType:string='URL'

  async captureImage() {
    const image = await Camera.getPhoto({
      quality: 50,
      resultType: CameraResultType.Base64,
      source: CameraSource.Camera,
    });
    const base64Image = 'data:image/png;base64,' + image.base64String;
    this.base64 = base64Image;
  }
  
  constructor(private foodservice: FoodserviceService, private router: Router) { }

  ngOnInit() {
    this.arrPrice = this.generateNumberOptions(30000, 50000, 2000)
  }

  generateNumberOptions(start: number, end: number, step: number): number[] {
    const options: number[] = [];
    for (let i = start; i <= end; i += step) {
      options.push(i); //menambahkan dibelakang array
    }
    return options;
  }

  submitpasta() {
    if(this.imageType=='Camera')
    {
      this.new_url="https://ubaya.xyz/hybrid/160422071/images/"+this.new_name+".png"
      this.foodservice.uploadImage(this.new_name,this.base64).subscribe(
        (response: any) => {
          if(response.result==='success'){
              alert("photo uploaded");
          }
        }
        )
    }
      
    this.foodservice.addPasta(this.new_name, this.new_url, this.new_desc, this.new_price, this.new_spicy).subscribe(
      (response:any) => {
        if (response.result === 'success') {
          alert("Success")
        } else {
          alert(response.message)
        }
      }
    )
  }

  toPasta(){
    this.router.navigate(['/pasta']);
  }
}
