import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-show-dep',
  templateUrl: './show-dep.component.html',
  styleUrls: ['./show-dep.component.css']
})
export class ShowDepComponent implements OnInit {

  constructor(private service:SharedService) {
    //this.ModalTitle = 'ModalTitle';
   }
  DepartmentList:any=[];

  ModalTitle:any;
  ActivateAddEditDepComp:boolean=false;
  dep:any;

  DepartmentIdFilter:any;
  DepartmentNameFilter:any;
  DepartmentListsWithoutFilter:any=[];

  ngOnInit(): void {
    this.refreshDeplist();
  }

  addClick(){
    this.dep={
      DepartmentId:0,
      DepartmentName:""

    }
    this.ModalTitle="Add Department";
    this.ActivateAddEditDepComp=true;

  }

  editClick(item:any){
    console.log(item);
    this.dep=item;
    this.ModalTitle="Edit Department";
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are You Sure??')){
      this.service.deleteDepartment(item.DepartmentId).subscribe(data=>{
        alert(data.toString());
        this.refreshDeplist();
      })
    }

  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDeplist();
  }

  refreshDeplist(){
    this.service.getDepList().subscribe(data=>{
      this.DepartmentList=data;
      this.DepartmentListsWithoutFilter=data;
    });

  }

  FilterFn(){
    var DepartmentIdFilter = this.DepartmentIdFilter;
    var DepartmentNameFilter = this.DepartmentNameFilter;

    this.DepartmentList = this.DepartmentListsWithoutFilter.filter(function(el:any){
      return el.DepartmentId.toString().toLowerCase().includes(
        DepartmentIdFilter.toString().trim().toLowerCase()
      )&&
      el.DepartmentName.toString().toLowerCase().includes(
        DepartmentNameFilter.toString().trim().toLowerCase()
      )
    });
  }


  sortResult(prop:any,asc:any){
    this.DepartmentList = this.DepartmentListsWithoutFilter.sort(function(a:any,b:any){
      if(asc){
          return (a[prop]>b[prop])?1 : ((a[prop]<b[prop]) ?-1 :0);
      }else{
        return (b[prop]>a[prop])?1 : ((b[prop]<a[prop]) ?-1 :0);
      }
    })
  }

}
