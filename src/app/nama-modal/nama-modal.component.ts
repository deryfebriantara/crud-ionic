import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-nama-modal',
  templateUrl: './nama-modal.component.html',
  styleUrls: ['./nama-modal.component.scss'],
})
export class NamaModalComponent implements OnInit {
 // nama : string;

  @Input() nama : string
  constructor(
    private modalCtrl : ModalController
  ) { }
  
  ngOnInit() {
    console.log("modal page")
  }

  submit(){
    console.log(this.nama)
    this.modalCtrl.dismiss({
      'nama': this.nama
    })
  }

  cancel(){
    this.modalCtrl.dismiss({
    })
  }
}
