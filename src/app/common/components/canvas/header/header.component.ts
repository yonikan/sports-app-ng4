import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  @Input() inputIsOpen: boolean;
  @Output() onClick = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() {
  }

  onNavToggle() {
    // isOpen = !isOpen;
    this.inputIsOpen = !this.inputIsOpen;

    this.onClick.emit(this.inputIsOpen);
  }

}
