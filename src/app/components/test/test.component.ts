import { Component, OnInit } from '@angular/core';
import { TestService } from '../../service/test.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

  constructor(
    private _testService: TestService
  ) { }

  ngOnInit() {
    this._testService.getTest();
  }

}
