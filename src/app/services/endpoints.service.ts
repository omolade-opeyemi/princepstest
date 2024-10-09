import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EndpointsService {
  baseUrl = "http://160.119.254.236:5085/api/v1/";
  

  constructor(private http: HttpClient) { }

  getCustomers():Observable<any>{
    return this.http.get(this.baseUrl + 'customers')
  }
  
  paginate(page:any):Observable<any>{
    return this.http.get(this.baseUrl + 'customers' + '?page='+page)
  }



  }


