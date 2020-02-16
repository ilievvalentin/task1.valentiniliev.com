import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hyperlink} from './hyperlink.model';

const url = 'https://api.task1.valentiniliev.com/hyperlinks';

const defaultHyperlink = new Hyperlink('', '', '', '', '', '');

@Injectable({
  providedIn: 'root'
})
export class HyperlinkService {

  constructor(private httpClient: HttpClient) {
  }

  public getAll() {
    return this.httpClient.get(url);
  }

  private edit(hyperlink: Hyperlink) {
    return this.httpClient.patch(url + '/' + hyperlink.id, hyperlink);
  }

  private delete() {
    return this.edit(defaultHyperlink);
  }

}
