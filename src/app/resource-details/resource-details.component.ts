import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { MobileList } from '../User';

@Component({
  selector: 'app-resource-details',
  templateUrl: './resource-details.component.html',
  styleUrls: ['./resource-details.component.css']
})
export class ResourceDetailsComponent implements OnInit {

  ResourceList:MobileList;

  constructor(private authenticationservice:AuthenticationService) { }

  ngOnInit() {
    //  this.authenticationservice.ResourceList()
    //  .subscribe(
    //    ResourceList=>this.ResourceList=ResourceList
    //  )

  }

}
