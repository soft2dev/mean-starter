import {Component, OnInit} from '@angular/core';
import {FormGroup, FormArray, FormBuilder, FormControl, Validators} from "@angular/forms";

@Component({
  selector: 'app-mixer',
  templateUrl: './mixer.component.html',
  styleUrls: ['./mixer.component.scss']
})
export class MixerComponent implements OnInit {
  public mixerForm: FormGroup;

  constructor(private _fb: FormBuilder) { }

  ngOnInit() {
    this.mixerForm = this._fb.group({
      mixerFormRows: this._fb.array([this.initMixerFormRows()])
    });
  }

  initMixerFormRows() {
    return this._fb.group({
      mixeritemname: ['']
    });
  }

  addNewRow() {
    // control refers to formarray
    const control = <FormArray>this.mixerForm.controls['mixerFormRows'];
    // add new formgroup
    control.push(this.initMixerFormRows());
  }

}
