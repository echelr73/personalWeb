import { Component, Inject, OnInit } from '@angular/core';
import { displayLog, mostrarGrilla } from './utils';
import { fromEvent } from 'rxjs';
import { map, takeWhile } from 'rxjs/operators'; 
import { Subscription } from 'rxjs';
import { window } from 'rxjs';
import { ActivatedRoute, Router } from '@angular/router';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-tateti',
  templateUrl: './tateti.component.html',
  styleUrls: ['./tateti.component.sass']
})
export class TatetiComponent implements OnInit {
  constructor( @Inject(DOCUMENT) private document: Document ) {}

  ngOnInit(): void {
    this.tatetiStart();
  }

  tatetiStart(){
    const grid = document.getElementById('grid');
    const click$ = fromEvent(grid, 'click').pipe(
      map((val:any,index) =>[
        Math.floor(val.offsetX / 50) + "." +
        Math.floor(val.offsetY / 50),
        index
      ]),
      takeWhile(([index]) =>index <= 8)
    );
    const subscription = click$.subscribe((data: any) => mostrarGrilla(data));
  }

  resetTateti(){
    this.onReload();
  }

  onReload(){
    this.document.location.reload();
  }
}
