import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero'
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css'],
})
export class HeroesComponent implements OnInit {
onSelect(_t5: Hero) {
throw new Error('Method not implemented.');
}

  heroes = HEROES;
  
  hero: Hero = {
    id: 1,
    name: 'Fyora'
  };
selectedHero: any;

  constructor() { }

  ngOnInit(): void {
  }

}
