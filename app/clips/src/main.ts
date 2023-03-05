import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import { environment } from 'src/environments/environment';
import { AppModule } from './app/app.module';

firebase.initializeApp(environment.firebase);

let appInit = false;

firebase.auth().onAuthStateChanged(() => {
  if (!appInit) {
    platformBrowserDynamic()
      .bootstrapModule(AppModule)
      .catch((err) => console.error(err));
  }
  appInit = true;
});
