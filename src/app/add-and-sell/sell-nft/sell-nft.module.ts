import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { VenderNFTComponent } from './vender-nft/vender-nft.component';

const routes: Routes = [
  {
    path: 'SellNFT',
    component: VenderNFTComponent
  }
]

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [VenderNFTComponent]
})
export class SellNFTModule { }
