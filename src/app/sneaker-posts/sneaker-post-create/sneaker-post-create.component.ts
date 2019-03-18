import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { sneakerService } from '../../shared/sneaker.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { sneaker } from '../../models/sneaker.model';

@Component({
  selector: 'app-sneaker-post-create',
  templateUrl: './sneaker-post-create.component.html',
  styleUrls: ['./sneaker-post-create.component.css']
})
export class SneakerPostCreateComponent implements OnInit {

  newPost: boolean;
  currentSneakerId: string;
  tempSneak : sneaker;
  isLoading = false;

  constructor(private sneakerService: sneakerService, public route: ActivatedRoute) { }

  ngOnInit() {
    // this.sneakerService.getSneakers();
    this.route.paramMap.subscribe((paramMap: ParamMap)=>{
      if (paramMap.has('sneakerId')){
        this.newPost = false
        this.currentSneakerId = paramMap.get('sneakerId')
        this.tempSneak = this.sneakerService.getSneaker(this.currentSneakerId)
      }else{
        this.newPost = true
        this.currentSneakerId = null;
      }
      this.isLoading = false;

    })

  }

  onSavePost(form:  NgForm){
    // console.log(form.value.name)
    // console.log(form.value.description)
    this.sneakerService.addSneakers(form.value.name, 120, form.value.description);
    form.resetForm();
  }

}
