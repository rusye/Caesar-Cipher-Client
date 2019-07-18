import { Component, OnInit } from "@angular/core";
import { CipherService } from "../../services/cipher.service";

import { Cipher } from "../../models/Cipher";

@Component({
  selector: "app-ciphers",
  templateUrl: "./ciphers.component.html",
  styleUrls: ["./ciphers.component.css"]
})
export class CiphersComponent implements OnInit {
  ciphers: Cipher[];

  constructor(private cipherService: CipherService) {}

  ngOnInit() {
    this.cipherService.getCiphers().subscribe(ciphers => {
      this.ciphers = ciphers;
    });
  }
}
