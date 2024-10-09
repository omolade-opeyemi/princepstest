import { Component, OnInit } from '@angular/core';
import { EndpointsService } from '../../services/endpoints.service';
import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrl: './customer.component.scss'
})
export class CustomerComponent implements  OnInit{
  constructor(private endpoint:EndpointsService, private toastr: ToastrService){}
  customers:any[]=[];
  links:any;
  totalPage:number=0

  ngOnInit(): void {
    this.endpoint.getCustomers().subscribe(
      (res)=>{
        if(res.status != 'success'){
          this.toastr.info('Successful!', res.message);
        }
        else{
          this.customers = res.data.data;
          this.links = res.data.pagination;
          this.totalPage = this.links.totalPages
          this.toastr.success('Successful!', res.message);
        }
      },(error) => {
        this.toastr.success('Successful!', error);
      })
  }
  paginate(page:any){
    this.endpoint.paginate(page).subscribe(
      (res)=>{
        if(res.status != 'success'){
          this.toastr.info('Successful!', res.message);
        }
        else{
          this.customers = res.data.data;
          this.links = res.data.pagination;
          this.toastr.success('Successful!', res.message);
        }
      },(error) => {
        this.toastr.success('Successful!', error);
      })
  }

}
