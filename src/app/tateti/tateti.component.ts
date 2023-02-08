import { Component, OnInit } from '@angular/core';
import { displayLog, mostrarGrilla, resetTateti } from './utils';
import { fromEvent } from 'rxjs';
import { map, take } from 'rxjs/operators'; 

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.sass']
})
export class TatetiComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
      /** start coding */
      const grid:any = document.getElementById('grid');
      const click$ = fromEvent(grid, 'click').pipe(
          map((val:any,index) =>[
              Math.floor(val.offsetX / 50) + "." +
              Math.floor(val.offsetY / 50),
              index
          ]      
          ),
          take(8)
      );
      const subscription = click$.subscribe((data: any) => mostrarGrilla(data));
  
  
      /** end coding */
  }

}
