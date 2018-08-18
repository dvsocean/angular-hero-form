import { Component, OnInit } from '@angular/core'; 
import { Hero } from '../classes/hero'; 


@Component({
    selector: 'app-heroes',
    templateUrl: './heroes.component.html',
    styleUrls: ['./heroes.component.css']
})


export class HeroesComponent implements OnInit {


    hero: Hero = {
        name: 'John',
        email: 'Jordana@gmail.com',
        type: 3
    };

    constructor() {}

    ngOnInit(): void {
        throw new Error("Method not implemented.");
    }

}