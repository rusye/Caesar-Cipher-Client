import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Cipher } from "../models/Cipher";

@Injectable({
  providedIn: "root"
})
export class CipherService {
  ciphersUrl:string = "http://localhost:3000/ciphers";
  constructor(private http: HttpClient) {}

  getCiphers(): Observable<Cipher[]> {
    return this.http.get<Cipher[]>(this.ciphersUrl);
  }
}
