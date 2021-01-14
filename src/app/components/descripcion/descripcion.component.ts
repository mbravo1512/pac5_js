import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Capitulos } from 'src/app/models/capitulos.interface'
import { CapitulosService } from 'src/app/service/capitulos.service'


@Component({
  selector: 'app-descripcion',
  templateUrl: './descripcion.component.html',
  styleUrls: ['./descripcion.component.css']
})
export class DescripcionComponent implements OnInit {
  capitulos: Capitulos[]=[]

  constructor(private capituloService: CapitulosService) { }
  ngOnInit(): void {
    this.capituloService
    .getAllCapitulos()
    .subscribe((capitulos)=> this.capitulos=capitulos)
  }
}
