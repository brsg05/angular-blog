import { Component, OnInit, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-small-card',
  imports: [RouterModule],
  templateUrl: './small-card.component.html',
  styleUrls: ['./small-card.component.css']
})
export class SmallCardComponent implements OnInit {

  @Input() pictureCover:string = "";

  @Input() cardTitle:string = "";

  @Input() pageId:string = "0";
  
  constructor() { }

  ngOnInit(): void {
  }

}
