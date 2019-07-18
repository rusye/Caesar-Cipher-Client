import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CiphersComponent } from "./components/ciphers/ciphers.component";
import { CipherItemComponent } from "./components/cipher-item/cipher-item.component";
import { EncryptComponent } from "./components/encrypt/encrypt.component";
import { EncryptedComponent } from "./components/encrypted/encrypted.component";

@NgModule({
  declarations: [
    AppComponent,
    CiphersComponent,
    CipherItemComponent,
    EncryptComponent,
    EncryptedComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
