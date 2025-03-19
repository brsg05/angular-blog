import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-big-card',
  //imports: [],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {


  @Input() pictureCover:string = "";
  @Input() cardTitle:string = "";
  @Input() cardDescription:string = "";


  constructor() { }

  ngOnInit(): void {
  }

}
