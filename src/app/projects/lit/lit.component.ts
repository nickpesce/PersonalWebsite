import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { state, trigger } from '@angular/animations';

@Component({
  selector: 'app-lit',
  templateUrl: './lit.component.html',
  styleUrls: ['./lit.component.css'],
})
export class LitComponent implements OnInit {
  @ViewChild("title") private title: ElementRef;

  constructor() { }

  ngOnInit() {
  }

}
