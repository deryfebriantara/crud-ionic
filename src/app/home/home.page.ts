import { Component, OnInit } from '@angular/core';
import { MenuController, ModalController } from '@ionic/angular';
import { NamaModalComponent } from '../nama-modal/nama-modal.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

   names : String[]= [
    "Pokémon Yellow",
    "Mega Man X",
    "The Legend of Zelda",
    "Pac-Man",
    "Super Mario World",
    "Gatot"
  ]

  constructor( 
    private menuCtrl : MenuController,
    private modalCtrl : ModalController) { }



  ngOnInit() {
  }

  async tambahModal(){
    const modal = await this.modalCtrl.create({
      component: NamaModalComponent
    });

     await modal.present();
     const { data } = await modal.onWillDismiss();
   
    if(data.nama){
      this.names.push(data.nama)
    }
  }

 async editModal(name : String){
  const index = this.names.indexOf(name)
  console.log(index)
  const modal = await this.modalCtrl.create({
    component: NamaModalComponent,
    componentProps:{
      'nama' : name
    }
  });

   await modal.present();
   const { data } = await modal.onWillDismiss();
 
  if(data.nama){
    this.names[index] = data.nama
  }
 }

 hapus(name: String){
  const index = this.names.indexOf(name)
  if (index > -1) {
    this.names.splice(index, 1); 
  }
 }

 
}
