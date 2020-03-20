import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VisionService } from 'src/app/services/vision.service';
import { Subscriber } from 'rxjs';
import { Vision } from 'src/app/Models/Vision';
@Component({
  selector: 'app-ver-vision',
  templateUrl: './ver-vision.component.html',
  styleUrls: ['./ver-vision.component.css']
})
export class VerVisionComponent implements OnInit {
  visiones: Vision[];
  vision:Vision;
  constructor(private visionService: VisionService, private router: Router) { }
  ngOnInit() {
    this.visionService.getVision()
   .subscribe(data =>{
     this.visiones = data;
     this.vision = data[0];
   });
  }
  edit_vision(vision: Vision):void{
    localStorage.setItem("id_vision", vision.id_vision.toString());
    this.router.navigate(["edit_vision"]); //in  app routing.ts => edit
}

}
