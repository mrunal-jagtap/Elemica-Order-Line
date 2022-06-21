import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.scss'],
})
export class OrderConfirmationComponent implements OnInit {
  panelOpenState = false;
  formChangesSubscription: any;
  constructor(private shareService: SharedService) {}
  shipingDate: string = '';
  salesOrderNumber: number | undefined;
  usersChoice: string = 'accept';
  @ViewChild('confirmationForm', { static: true }) ngForm: NgForm | undefined;

  ngOnInit(): void {
    this.formChangesSubscription = this.ngForm?.form.valueChanges
      .pipe(debounceTime(500))
      .subscribe((data) => {
        if (
          data.shipingDate &&
          data.shipingDate !== '' &&
          this.ngForm?.form.valid
        ) {
          this.shareService.setData(data, true);
        } else {
          this.shareService.setData(data, false);
        }
      });
  }

  ngOnDestroy() {
    this.formChangesSubscription.unsubscribe();
  }
}
