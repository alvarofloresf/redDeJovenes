import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjetivoService } from 'src/app/services/objetivo.service';
import { Subscriber } from 'rxjs';
import { Objetivos } from 'src/app/models/Objetivos';
@Component({
  selector: 'app-edit-objetivo',
  templateUrl: './edit-objetivo.component.html',
  styleUrls: ['./edit-objetivo.component.css']
})
export class EditObjetivoComponent implements OnInit {
  objetivo: Objetivos=new Objetivos();
  constructor(private router:Router,private service:ObjetivoService) { }
  ngOnInit() {
    this.edit_objetivo();
  }
  edit_objetivo(){
    let id_objetivos=localStorage.getItem("id_objetivos");
    this.service.getObjetivoId(+id_objetivos)
    .subscribe(data => {
      this.objetivo = data;
    })
  }
  Actualizar(objetivo:Objetivos){
    this.service.updateObjetivo(objetivo)
    .subscribe(data=>{
      this.objetivo=data;

      this.router.navigate(["/"]);
    })
  }

}
