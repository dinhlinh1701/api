import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BankAccountService {

  constructor(private http: HttpClient) { }
  putBankAccount(formData){
    return this.http.get(environment.apiBaseURL+'/Banks');
  }
  postBankAccount(formData){
    return this.http.get(environment.apiBaseURL+'/Banks'+formData.bankAccountID);
  }
  getBankAccountList(){
    return this.http.get(environment.apiBaseURL+'/Banks');
  }
}
