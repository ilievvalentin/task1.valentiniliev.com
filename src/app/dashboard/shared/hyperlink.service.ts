import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Hyperlink} from './hyperlink.model';

const url = 'https://api.task1.valentiniliev.com/hyperlinks';

const defaultHyperlink = new Hyperlink('', 'https://task1.valentiniliev.com/admin-dashboard', 'Task1', '#ffffff', '', '');

@Injectable({
  providedIn: 'root'
})
export class HyperlinkService {

  constructor(private httpClient: HttpClient) {
  }

  public getAll() {
    return this.httpClient.get(url);
  }

  public edit(hyperlink: Hyperlink) {
    return this.httpClient.patch(url + '/' + hyperlink.id, hyperlink);
  }

  public delete(hyperlink: Hyperlink) {
    defaultHyperlink.id = hyperlink.id;
    return this.edit(defaultHyperlink);
  }

}
