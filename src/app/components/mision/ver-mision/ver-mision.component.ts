import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MisionService } from 'src/app/services/mision.service';
import { Subscriber } from 'rxjs';
import { Mision } from 'src/app/models/Mision';
@Component({
  selector: 'app-ver-mision',
  templateUrl: './ver-mision.component.html',
  styleUrls: ['./ver-mision.component.css']
})
export class VerMisionComponent implements OnInit {
  misiones: Mision[];
  mision:Mision;

  constructor(private misionservice: MisionService, private router: Router) { }
  ngOnInit() {
    this.misionservice.getMision()
   .subscribe(data =>{
     this.misiones = data;
     this.mision = data[0];
   });
  }
  edit_mision(mision: Mision):void{
    localStorage.setItem("id_mision", mision.id_mision.toString());
    this.router.navigate(["edit_mision"]); //in  app routing.ts => edit
}




}
