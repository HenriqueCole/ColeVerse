import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { VenderNFTComponent } from './vender-nft/vender-nft.component';
import { EditarNFTComponent } from './editar-nft/editar-nft.component';
import { RemoveNFTComponent } from './remove-nft/remove-nft.component';
import { EditarNFTdaVendaComponent } from './editar-nftda-venda/editar-nftda-venda.component';
import { RemoverNFTdaVendaComponent } from './remover-nftda-venda/remover-nftda-venda.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [VenderNFTComponent, EditarNFTComponent, RemoveNFTComponent, EditarNFTdaVendaComponent, RemoverNFTdaVendaComponent]
})
export class SellNFTModule { }
