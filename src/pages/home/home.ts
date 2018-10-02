import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {LoginPage} from '../login/login';

import { Character } from '../../app/character';
import { SwapiProvider } from '../../providers/swapi/swapi';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  protected character: Character;
  //private rootPage: any = StartPage;
  constructor( public nav: NavController, public authData: AuthProvider, protected swapiService: SwapiProvider) {
  this.authData = authData;
  this.initialize();
  }

  initialize() {
  this.getCharacter();
  }

  getCharacter(): void {
    this.swapiService.getCharacter().subscribe(
      (people) => {
        this.character = { name: people.name, height: people.height, mass: people.mass, image: ''};
        console.log(this.character);

        // Getting Image
        this.swapiService.getCharacterImage(this.character.name).subscribe(
          (image) => {
            console.log('image>>>', image);
            this.character.image = image.data[0].images.downsized.url;
            console.log(this.character.image);
          }
        );
      }
    );
  }

  shuffle() {
    this.getCharacter();
  }

 logOut(){
  this.authData.logoutUser().then(() => {
    this.nav.setRoot(LoginPage);
  });
}
}
