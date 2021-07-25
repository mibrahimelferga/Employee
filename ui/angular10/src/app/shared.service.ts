import { Injectable } from '@angular/core';

import{HttpClient} from '@angular/common/http';
import{Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

readonly ApiUrl="http://localhost:49886/api";
readonly PhotoUrl="http://localhost:49886/Photos/";

  constructor(private http:HttpClient) { }

  getDepList():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/department');
  }

  addDepartment(val:any){
    return this.http.post(this.ApiUrl+'/Department',val);
  }

  updateDepartment(val:any){
    return this.http.put(this.ApiUrl+'/Department',val);
  }
  
  deleteDepartment(val:any){
    return this.http.delete(this.ApiUrl+'/Department/'+val);
  }




  getEmpList():Observable<any[]>{
    return this.http.get<any>(this.ApiUrl+'/employee');
  }

  addEmployee(val:any){
    return this.http.post(this.ApiUrl+'/Employee',val);
  }

  updateEmployee(val:any){
    return this.http.put(this.ApiUrl+'/Employee',val);
  }
  
  deleteEmployee(val:any){
    return this.http.delete(this.ApiUrl+'/Employee/'+val);
  }



  UploadPhoto(val:any){
    return this.http.post(this.ApiUrl+'/Employee/SaveFile',val);
  }

  getAllDepartmentNames():Observable<any[]>{
    return this.http.get<any[]>(this.ApiUrl+'/Employee/GetAllDepartmentNames');
  }


}
