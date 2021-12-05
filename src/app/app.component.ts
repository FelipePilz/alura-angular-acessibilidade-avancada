import { ModalService } from './shared/components/modal/services/modal.service';
import { Component, ViewChild, TemplateRef, OnInit } from '@angular/core';
import { ModalRef } from './shared/components/modal/models/modal-ref';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('modal') public modalTemplateRef: TemplateRef<any>;
  title = 'a11y-p2';
  public firstName = 'Felipe';
  public modalRef: ModalRef;
  public form: FormGroup;

  constructor(
    private modalService: ModalService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      firstName: ['Felipe', Validators.required],
      surname: ['', Validators.required],
      age: ['', Validators.required],
    });
  }

  public show(): void {
    this.modalRef = this.modalService.open({
      templateRef: this.modalTemplateRef,
      title: 'User Details',
    });
  }

  public submit(): void {
    console.log(this.form.value);
    this.modalRef.close();
  }
}
