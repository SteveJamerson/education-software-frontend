import { Component, Input } from '@angular/core';
import { IconName, IconSchema } from './icon.interfaces';

@Component({
    selector: 'ui-icon',
    templateUrl: './icon.component.html',
    styleUrls: ['./icon.component.scss'],
})
export class IconComponent {
    @Input() id: string = '';
    @Input() name?: IconName;
    @Input() color: IconSchema = 'inherit';
    @Input() size?: string;

    public get classes(): string[] {
        const clsx = ['ds-icon', 'uil', `ds-icon-${this.color}`];

        if (this.name) clsx.push(`uil-${this.name}`);
        return clsx;
    }
}
