import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ImageComponent } from './components/image/image.component'
import { ImagesComponent } from './components/images/images.component'
import { CapitulosComponent } from './components/capitulos/capitulos.component'
import { DescripcionComponent } from './components/descripcion/descripcion.component'

const routes: Routes = [
  {path: 'images', component: ImagesComponent  },
  {path: 'image/:id', component: ImageComponent  },
   {path: '', component: DescripcionComponent  },
  {path: 'capitulo/:id', component: CapitulosComponent  },
  {path: '**', component: ImagesComponent  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
