import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-demande-main',
  templateUrl: './demande-main.component.html',
  styleUrls: ['./demande-main.component.css']
})
export class DemandeMainComponent implements OnInit {
  tab: number = 1;
  x: string='';
  userFile:any ;
  dataForm!: FormGroup
  shortLink: string = "";
  loading: boolean = false; // Flag variable
  file!: File ; // Variable to store file
   public imagePath:any;
   imgURL: any;
   public message!: string;
  constructor() { }

  ngOnInit(): void {
  }
  onChange(event:any) {
    this.file = event.target.files[0];
}
  onUpload() {
    this.loading = !this.loading;
    const formData = new  FormData();
    const article = this.dataForm.value;
    console.log("elyes : "+this.file)
    formData.append('file',this.file);
    formData.append('demande',JSON.stringify(article));


    console.log(this.file);
/*this.demandeService.upload(formData).subscribe(
        (event: any) => {
            if (typeof (event) === 'object') {

                // Short link via api response
                this.shortLink = event.link;

                this.loading = false; // Flag variable 
            }
        }
    );*/
}
}
