import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductService {

  private _albunmUrl = "../assets/album.json";
  constructor(private _http: Http) { }

  getAlbum(id: number){
    return this._http.get(this._albunmUrl).map((response)=>
    response.json());
  }
}
