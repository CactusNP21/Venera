import {Component, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatInputModule} from "@angular/material/input";
import {ActivatedRoute} from "@angular/router";
import {Restaurant} from "./services/home-controller.service";
import {data} from "autoprefixer";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MatInputModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private actRou: ActivatedRoute) {
  }

  restaurants: Restaurant[] = []

  ngOnInit() {
    this.actRou.data.subscribe(value => {
      console.log(value)
      this.restaurants = value['restaurants'] as Restaurant[]
    })
  }


}
