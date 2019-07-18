import { Component, OnInit, Input } from '@angular/core';
import { Cipher } from 'src/app/models/Cipher';

@Component({
  selector: 'app-cipher-item',
  templateUrl: './cipher-item.component.html',
  styleUrls: ['./cipher-item.component.css']
})
export class CipherItemComponent implements OnInit {
  @Input() cipher: Cipher;

  constructor() { }

  ngOnInit() {
  }

}
