import { Injectable } from "@angular/core";
import "rxjs/add/operator/map";
import { Http, Response } from "@angular/http";
import { map } from "rxjs/operator/map";

@Injectable()
export class ProductService {
  private _albumUrl: string = "../assets/album.json";

  constructor(private _http: Http) {
    this._http = _http;
  }
  getAlbum(id: number) {
    return this._http
      .get(this._albumUrl)
      .map((response: Response) => response.json());
  }
}
