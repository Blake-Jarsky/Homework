import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HEROES } from '../mock-heroes';

@Component({
  selector: 'app-heroes',
  template: `
  <div>
    <label>name: {{title | uppercase}}
      <input [(ngModel)]="HeroesComponent" /> 
    </label>
  </div>
  <h3> {{hero.toString()}} Hero </h3>
  <h4> Some heroes: </h4>
    <ul class="heroes">
      <li 
        *ngFor="let hero of heroes"
        (click)="onSelect(hero)"
        (click)="returnThis()"
        [class.selected]="hero === selectedHero"
      >
        <span class="badge">{{hero.id}}</span> {{hero.name}}
      </li>
    </ul>
  
  <div *ngIf="selectedHero">
  <h2>{{selectedHero.name | uppercase}} Details</h2>  
  <div><span>id: </span>{{selectedHero.id}}</div>
  <div>
    <label>name:
      <input [(ngModel)]="selectedHero.name" placeholder="name"/>
    </label>
  </div>
  </div>
  `,
  styleUrls: ['./heroes.component.scss']
})

export class HeroesComponent implements OnInit {
  title: string = "Title"
  heroes = HEROES;

  hero: Hero = {
    id: 1,
    name: 'Windstorm'
  };

  returnThis () {
    //return this;
    console.log(this);
  };

  selectedHero: Hero;
  onSelect (hero: Hero) {
    this.selectedHero = hero;
    console.log(this.selectedHero);
  }

  constructor () { }

  ngOnInit() {
  }

}
