import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

const url = 'https://api.task1.valentiniliev.com';

@Injectable({
  providedIn: 'root'
})
export class HyperlinksService {

  constructor(private httpClient: HttpClient) {
  }

  public getHyperlinks() {
    return this.httpClient.get(url  + '/hyperlinks');
  }

}
