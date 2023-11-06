import { Component, Input, Output, EventEmitter, HostListener } from '@angular/core';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})

export class NotificationComponent {
  title = 'app-notification';
  @Input({ required: true }) status :'success' | 'error' = 'success';
  @Input({ required: true }) label :string = '';
  @Input() text :string = '';

  @Output() onClosed = new EventEmitter<boolean>();

  @HostListener('animationend', ['$event.target'])
  onAnimationEnd() {
    this.onClosed.emit();
  }

}
