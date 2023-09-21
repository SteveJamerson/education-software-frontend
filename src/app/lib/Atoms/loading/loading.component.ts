import { Component, Input, ViewEncapsulation } from '@angular/core';

@Component({
    selector: 'ui-loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class LoadingComponent {
    _color?: string;
    @Input() on: boolean = true;
    @Input() size?: string;
    @Input() set color(color: string) {
        if (this.on) color += '-on';
        this._color = `var(--token-color-${color}-light)`;
    }
}
