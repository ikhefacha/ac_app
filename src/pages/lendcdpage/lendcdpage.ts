import { Component } from '@angular/core';
import {NavController, NavParams, ViewController} from 'ionic-angular';
import {lend} from "../../models/lend.model";
@Component({
  selector: 'page-lendcdpage',
  templateUrl: 'lendcdpage.html',
})
export class Lendcdpage {

  element: lend[];
    constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ngOnInit() {

    this.element = this.navParams.get('element');

  }

  dismissmodal(){
    this.viewCtrl.dismiss();
  }
  lend(a){
      a.isLend = !a.isLend;
  }
}
