import {
    Component,
    ElementRef,
    EventEmitter,
    Input,
    OnInit,
    Output,
    ViewEncapsulation,
} from '@angular/core';
import { IconName } from '../../Atoms/icon/icon.interfaces';
import {
    TextFieldSize,
    TextFieldStatus,
    TextFieldVariant,
} from './textfield.interfaces';

@Component({
    selector: 'ui-textfield',
    templateUrl: './textfield.component.html',
    styleUrls: ['./textfield.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class TextFieldComponent implements OnInit {
    @Input() id?: string;
    @Input() status: TextFieldStatus = 'principal';
    @Input() variant: TextFieldVariant = 'soft';
    @Input() size?: TextFieldSize;
    @Input() iconLeft?: IconName;
    @Input() iconRight?: IconName;

    @Output() onClickIconLeft: EventEmitter<Event> = new EventEmitter<Event>();
    @Output() onClickIconRight: EventEmitter<Event> = new EventEmitter<Event>();

    constructor(private element: ElementRef) {}

    ngOnInit(): void {
        const input = this.element.nativeElement.querySelector(
            'input'
        ) as HTMLInputElement;

        if (input && !this.types.includes(input.type)) {
            input.remove();
        }
    }

    public get types(): string[] {
        return [
            'button',
            'date',
            'datetime-local',
            'email',
            'month',
            'number',
            'password',
            'reset',
            'search',
            'submit',
            'tel',
            'text',
            'time',
            'url',
            'week',
        ];
    }

    public get classes(): string[] {
        const clsx = [
            'ds-textfield',
            `ds-textfield-${this.variant}`,
            `ds-textfield-${this.status}`,
        ];
        if (this.size) {
            clsx.push(`ds-textfield-${this.size}`);
        }
        return clsx;
    }
}
