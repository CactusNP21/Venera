import { ResolveFn } from '@angular/router';
import {HomeControllerService, Restaurant} from "../services/home-controller.service";
import {inject} from "@angular/core";
import {take} from "rxjs";

export const homeResolver: ResolveFn<Restaurant[]> = (route, state, hc: HomeControllerService = inject(HomeControllerService)) => {

  return hc.popularRest().pipe();
};
