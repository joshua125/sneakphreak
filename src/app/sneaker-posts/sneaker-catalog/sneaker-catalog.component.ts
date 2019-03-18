import { Component, OnInit, OnDestroy } from '@angular/core';
import {sneaker} from '../../models/sneaker.model';
import { sneakerService } from '../../shared/sneaker.service';
import {Subscription} from 'rxjs'
@Component({
  selector: 'app-sneaker-catalog',
  templateUrl: './sneaker-catalog.component.html',
  styleUrls: ['./sneaker-catalog.component.css']
})
export class SneakerCatalogComponent implements OnInit, OnDestroy {

  private sneakers: sneaker[] = []
  private sneakerCatalogSub : Subscription;

  constructor(private sneakerService: sneakerService) {

   }

  ngOnInit() {
    this.sneakerService.getSneakers();
    this.sneakerCatalogSub = this.sneakerService.getSneakerListener()
    .subscribe((sneaks: sneaker[])=>{
      this.sneakers = sneaks;
    })
  }

  ngOnDestroy(){
    this.sneakerCatalogSub.unsubscribe();
  }

  onDelete(sneaksID: string){
    console.log(sneaksID)
    this.sneakerService.deleteSneaker(sneaksID)
  }

}
