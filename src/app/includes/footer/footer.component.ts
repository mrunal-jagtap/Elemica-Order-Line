import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/services/shared.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isDisabled : boolean = true;
  formData: any = {};
  constructor(private shareService : SharedService) { }

  ngOnInit(): void {
    this.shareService.isFormValid.subscribe((data:any) => {
      this.isDisabled = !data.isValid;
      this.formData = {...data};
      delete this.formData.isValid;
     
    })
  }
  submitData(){
    console.log("Submitted Data",this.formData);
  }
}
