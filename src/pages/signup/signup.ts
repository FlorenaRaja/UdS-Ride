import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import firebase from 'firebase';

/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  name: string  = "";
  email: string = "";
  password: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  signup()
  {
    // console.log(this.name,this.email,this.password);
    // use email and password to sign users up
    firebase.auth().createUserWithEmailAndPassword(this.email,this.password).then((data)=>{
      console.log(data)

      let newUser: firebase.User = data.user;
      newUser.updateProfile({
        displayName:this.name,
        photoURL:""

      }).then(() => {
        console.log("profile updated")
      }).catch((err)=>{
        console.log(err)
      
      })
      
    }).catch((err)=>{
      console.log(err)
    });
}

  goBacktoLogin()
  {
    this.navCtrl.pop();
  }



}
