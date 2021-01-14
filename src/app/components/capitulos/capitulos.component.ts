import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Capitulos } from 'src/app/models/capitulos.interface'
import { CapitulosService } from 'src/app/service/capitulos.service'

@Component({
  selector: 'app-capitulos',
  templateUrl: './capitulos.component.html',
  styleUrls: ['./capitulos.component.css']
})
export class CapitulosComponent implements OnInit {
  capitulos: Capitulos []=[];


  constructor(
    private capituloService:CapitulosService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    const identifier= this.activatedRoute.snapshot.paramMap.get('id')
    console.log('Id -->', identifier)
    this.capituloService.getPortadasCapituloId(identifier).subscribe((capitulos)=>{
      if (!capitulos){
        return this.router.navigateByUrl('/')
      }

      this.capitulos=capitulos;

      console.log('Capitulo -->', this.capitulos[0])


    })
  }

}
