import { Component } from '@angular/core';
import {NzCardComponent} from "ng-zorro-antd/card";
import {NzIconDirective} from "ng-zorro-antd/icon";
import {NzTooltipDirective} from "ng-zorro-antd/tooltip";
import {NgIf} from "@angular/common";
import {BaseItem} from "../item.model";
import {NzBadgeComponent} from "ng-zorro-antd/badge";
import {DemoNgZorroAntdModule} from "../../../../ng-zorro-antd.module";

@Component({
  selector: 'app-rhombus',
  templateUrl: './rhombus.component.html',
  standalone: true,
    imports: [
        DemoNgZorroAntdModule,
        NgIf
    ],
  styleUrl: './rhombus.component.css'
})
export class RhombusComponent extends BaseItem{

  constructor() {
    super();
    this._componentName='rhombus';
  }
}
