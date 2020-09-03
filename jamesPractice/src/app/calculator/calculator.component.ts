import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  show: string = "0";
  opera1: number = 0;
  opera2: number = 0;
  calculate: string = "";
  result: number = 0;
  check: boolean = false;

  constructor() {
  }

  ngOnInit(): void {

  }

  putNumber(number) {
    if (this.result != 0) {
      this.reset()
    }
    if (this.check) {
      if (this.opera2 != 0) {
        this.opera2 = this.opera2 * 10 + number;
        this.show = this.opera1.toString() + this.calculate + this.opera2.toString();
      } else {
        this.opera2 = number;
        this.show = this.opera1.toString() + this.calculate + this.opera2.toString();
      }
    } else {
      if (this.opera1 != 0) {
        this.opera1 = this.opera1 * 10 + number;
        this.show = this.opera1.toString();
      } else {
        this.opera1 = number;
        this.show = this.opera1.toString();
      }

    }
  }

  add() {
    if (this.calculate == "") {
      this.check = true;
      this.calculate = "+";
      this.show = this.opera1.toString() + "+";
    }
  }

  sub() {
    if (this.calculate == "") {
      this.check = true;
      this.calculate = "-";
      this.show = this.opera1.toString() + "-";
    }
  }

  mul() {
    if (this.calculate == "") {
      this.check = true;
      this.calculate = "*";
      this.show = this.opera1.toString() + "*";
    }
  }

  div() {
    if (this.calculate == "") {
      this.check = true;
      this.calculate = "/";
      this.show = this.opera1.toString() + "/";
    }
  }

  reset() {
    this.show = "0";
    this.opera1 = 0;
    this.opera2 = 0;
    this.calculate = "";
    this.result = 0;
    this.check = false;
  }

  cal() {
    if (this.calculate == "+") {
      this.result = this.opera1 + this.opera2;
    }
    if (this.calculate == "-") {
      this.result = this.opera1 - this.opera2;
    }
    if (this.calculate == "*") {
      this.result = this.opera1 * this.opera2;
    }
    if (this.calculate == "/") {
      this.result = this.opera1 / this.opera2;
    }
    this.show = this.result.toString();
  }

}
