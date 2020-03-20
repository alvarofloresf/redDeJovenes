import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MisionService } from 'src/app/services/mision.service';
import { Subscriber } from 'rxjs';
import { Mision } from 'src/app/models/Mision';

@Component({
  selector: 'app-edit-mision',
  templateUrl: './edit-mision.component.html',
  styleUrls: ['./edit-mision.component.css']
})
export class EditMisionComponent implements OnInit {
  mision: Mision=new Mision();
  constructor(private router:Router,private service:MisionService) { }

  ngOnInit() {
    this.edit_mision();
  }
  edit_mision(){
    let id_mision=localStorage.getItem("id_mision");
    this.service.getMisionId(+id_mision)
    .subscribe(data => {
      this.mision = data;
    })
  }
  Actualizar(mision:Mision){
    this.service.updateMision(mision)
    .subscribe(data=>{
      this.mision=data;

      this.router.navigate(["/"]);
    })
  }
}
