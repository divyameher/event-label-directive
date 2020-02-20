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
    let classList = this.el.nativeElement.classList;
    let className = classList;
    if (event.activity && event.activity.configuration) {
      if (event.activity.configuration.isOnCall) {
        label = "ON CALL";
        className += " orange";
        if (event.status == "Requested") {
          label = "On call request";
          className += " request";
        }
      } else if (event.activity.configuration.isTimeOff) {
        label = "TIME OFF";
        className += " purple";
        if (event.status == "Requested") {
          label = "Time off request";
          className += " request";
        }
      }
    }

    if (event.payCode && event.payCode.configuration) {
      if (event.payCode.configuration.isOnCall) {
        label = "ON CALL";
        className += " orange";
        if (event.status == "Requested") {
          label = "On call request";
          className += " request";
        }
      } else if (event.payCode.configuration.isTimeOff) {
        label = "TIME OFF";
        className = "purple";
        if (event.status == "Requested") {
          label = "Time off request";
          className += " request";
        }
      }

      if (event.isTradeRequested && event.scheduleStatus == "Trade") {
        if (event.scheduleTradeStatus == "Requested") {
          label = "Trade request";
          className += "request";
        } else if (event.scheduleTradeStatus == "Accepted") {
          label = "Trade accepted";
          className += "request";
        }
      }
    }
    this.el.nativeElement.className = className;
    this.el.nativeElement.innerHTML = label;
  }
}
