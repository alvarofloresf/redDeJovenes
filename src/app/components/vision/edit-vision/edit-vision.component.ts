import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisionService } from 'src/app/services/vision.service';
import { Subscriber } from 'rxjs';
import { Vision } from 'src/app/models/Vision';
@Component({
  selector: 'app-edit-vision',
  templateUrl: './edit-vision.component.html',
  styleUrls: ['./edit-vision.component.css']
})
export class EditVisionComponent implements OnInit {
  vision: Vision=new Vision();
  constructor(private router:Router,private service:VisionService) { }

  ngOnInit() {
    this.edit_vision();
  }
  edit_vision(){
    let id_vision=localStorage.getItem("id_vision");
    this.service.getVisionId(+id_vision)
    .subscribe(data => {
      this.vision = data;
    })
  }
  Actualizar(vision:Vision){
    this.service.updateVision(vision)
    .subscribe(data=>{
      this.vision=data;

      this.router.navigate(["/"]);
    })
  }

}
