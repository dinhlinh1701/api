import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import {BankService} from 'src/app/shared/bank.service'
import { from } from 'rxjs';
import { BankAccountService } from '../shared/bank-account.service';

@Component({
  selector: 'app-bank-account',
  templateUrl: './bank-account.component.html',
  styleUrls: ['./bank-account.component.css']
})
export class BankAccountComponent implements OnInit {

 bankAccountForms: FormArray = this.fb.array([]);
 bankList = [];
  

  constructor(private fb: FormBuilder, private bankService: BankService, private service : BankAccountService) { }

  ngOnInit() {
    this.bankService.getBankList().subscribe(res => this.bankList=res as []);

    this.service.getBankAccountList().subscribe(
      res => {
        if (res == [])
        this.addBankAccountForm();
        else {
//generate formarray as per
(res as []).forEach((bankAccount: any) => {

  this.bankAccountForms.push(this.fb.group({
    bankAccountID: [bankAccount.bankAccountID],
    accountNumber: [bankAccount.accountNumber],
    accountHolder: [bankAccount.accountHolder],
    bankID: [bankAccount.bankID],
    IFSC: [bankAccount.ifsc],
  }));

} )
        }
      }
    );
  }
addBankAccountForm() {
  this.bankAccountForms.push(this.fb.group({
    bankAccountID: [''],
    accountNumber: [''],
    accountHolder: [''],
    bankID: [0],
    IFSC: [''],
  }));
}
recordSubmit(fg:FormGroup){
this.service.postBankAccount(fg.value).subscribe((res: any) => {


fg.patchValue({bankAccountID: res.bankAccountID})


}


)
}
}
