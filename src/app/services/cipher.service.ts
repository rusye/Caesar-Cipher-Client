import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

import { Cipher } from "../models/Cipher";

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

@Injectable({
  providedIn: "root"
})
export class CipherService {
  ciphersUrl:string = "http://localhost:3000/ciphers";
  constructor(private http: HttpClient) {}

  // GET Previous Search Query
  getCiphers(): Observable<Cipher[]> {
    return this.http.get<Cipher[]>(this.ciphersUrl);
  }

  //POST A New Search Query
  newEncryption(cipher:Cipher):Observable<Cipher> {
    return this.http.post<Cipher>(this.ciphersUrl, cipher, httpOptions)
  }
}
