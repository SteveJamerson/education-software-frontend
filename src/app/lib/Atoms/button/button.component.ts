import {
    Component,
    EventEmitter,
    Input,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import { IconName } from '../icon/icon.interfaces';
import {
    ButtonSchema,
    ButtonSize,
    ButtonType,
    ButtonVariant,
} from './button.interfaces';

@Component({
    selector: 'ui-button',
    templateUrl: 'button.component.html',
    styleUrls: ['./button.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class ButtonComponent {
    @Input() id?: string;
    @Input() variant: ButtonVariant = 'primary';
    @Input() schema: ButtonSchema = 'principal';
    @Input() type: ButtonType = 'button';
    @Input() disabled: boolean = false;
    @Input() loading: boolean = false;
    @Input() label?: string | number;
    @Input() size?: ButtonSize;
    @Input() iconOnly?: IconName;
    @Input() iconLeft?: IconName;
    @Input() iconRight?: IconName;
    @Input() full: boolean = false;
    @Input() circle: boolean = false;

    @Output() onClick: EventEmitter<Event> = new EventEmitter<Event>();

    public get classes(): string[] {
        const clsx = ['ds-button', `ds-button-${this.schema}-${this.variant}`];

        if (this.size) clsx.push(`ds-button-${this.size}`);
        if (this.iconOnly) clsx.push(`ds-button-icon`);
        if (this.full) clsx.push(`ds-button-full`);
        if (this.circle) clsx.push(`ds-button-circle`);
        if (this.loading) clsx.push(`ds-button-loading`);

        return clsx;
    }
}
