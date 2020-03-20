import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ObjetivoService } from 'src/app/services/objetivo.service';
import { Subscriber } from 'rxjs';
import { Objetivos } from 'src/app/models/Objetivos';
@Component({
  selector: 'app-ver-objetivo',
  templateUrl: './ver-objetivo.component.html',
  styleUrls: ['./ver-objetivo.component.css']
})
export class VerObjetivoComponent implements OnInit {
  objetivos: Objetivos[];
  objetivo:Objetivos;
  constructor(private objetivoService: ObjetivoService, private router: Router) { }
  ngOnInit() {
    this.objetivoService.getObjetivos()
   .subscribe(data =>{
     this.objetivos = data;
     this.objetivo = data[0];
   });
  }
  edit_objetivo(objetivos: Objetivos):void{
    localStorage.setItem("id_objetivos", objetivos.id_objetivos.toString());
    this.router.navigate(["edit_objetivos"]); //in  app routing.ts => edit
}

}
