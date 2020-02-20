import {
  Component,
  Pipe,
  PipeTransform,
  Directive,
  ElementRef,
  Input,
  HostListener
} from "@angular/core";

@Directive({
  selector: "[eventLabel]"
})
export class EventLabelDirective {
  constructor(private el: ElementRef) {}

  @Input() eventObj: any;
  ngOnInit() {
    this.getLabel(this.eventObj);
  }
  // ngDoCheck() {
  //   this.getLabel(this.eventObj);
  // }
  // ngAfterContentInit() {
  //   this.getLabel(this.eventObj);
  // }
  getLabel(event: any) {
    let label = "";
    let color;
    if (event.activity && event.activity.configuration) {
      if (event.activity.configuration.isOnCall) {
        label = "ON CALL";
        color = "#E8A736";
      } else if (event.activity.configuration.isTimeOff) {
        label = "TIME OFF";
        color = "#903E97";
      }
    }

    if (event.payCode && event.payCode.configuration) {
      if (event.payCode.configuration.isOnCall) {
        label = "ON CALL";
        color = "#E8A736";
      } else if (event.payCode.configuration.isTimeOff) {
        label = "TIME OFF";
        color = "#903E97";
      }
    }
    this.el.nativeElement.style.color = color;
    this.el.nativeElement.innerHTML = label;
  }
}
