import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CiphersComponent } from "./components/ciphers/ciphers.component";
import { CipherItemComponent } from "./components/cipher-item/cipher-item.component";
import { EncryptComponent } from "./components/encrypt/encrypt.component";

@NgModule({
  declarations: [
    AppComponent,
    CiphersComponent,
    CipherItemComponent,
    EncryptComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
