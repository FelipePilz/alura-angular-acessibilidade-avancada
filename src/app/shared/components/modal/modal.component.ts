import { AfterViewInit, Component, HostBinding } from '@angular/core';
import { ModalConfig } from './interfaces/modal-config';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @HostBinding('class.show') public show = false;
  public config: ModalConfig;
}
