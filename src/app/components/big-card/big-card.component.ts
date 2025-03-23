import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-big-card',
  imports: [RouterModule],
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {


  @Input() pictureCover:string = "";
  @Input() cardTitle:string = "";
  @Input() cardDescription:string = "";
  @Input() pageId:string = "0";


  constructor() { }

  ngOnInit(): void {
  }

}
