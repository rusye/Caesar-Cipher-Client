import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { CiphersComponent } from "./components/ciphers/ciphers.component";
import { CipherItemComponent } from "./components/cipher-item/cipher-item.component";

@NgModule({
  declarations: [AppComponent, CiphersComponent, CipherItemComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
