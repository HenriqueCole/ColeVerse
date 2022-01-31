import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenderNFTComponent } from './vender-nft/vender-nft.component';
import { RemoverNFTComponent } from './remover-nft/remover-nft.component';
import { EditarNFTComponent } from './editar-nft/editar-nft.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VenderNFTComponent, RemoverNFTComponent, EditarNFTComponent]
})
export class NFTModule { }
