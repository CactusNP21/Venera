import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {server} from "../../../constants";
import {Observable} from "rxjs";

export interface Restaurant {
  id: number
  name: string
  posterUrl: string
}

@Injectable({
  providedIn: 'root'
})
export class HomeControllerService {

  constructor(private http: HttpClient) { }

  popularRest(): Observable<Restaurant[]> {
    return this.http.get<Restaurant[]>(server + '/api/restaurant/popular')
  }

}
