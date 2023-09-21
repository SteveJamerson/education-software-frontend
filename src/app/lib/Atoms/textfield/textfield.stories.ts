import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';

import { IconComponent } from '../../Atoms';
import { DirectivesModule } from '../../Utils/directives';
import { TextFieldComponent } from './textfield.component';

const argsDefault: Partial<TextFieldComponent & { [key: string]: any }> = {
    variant: 'soft',
    status: 'principal',
    disabled: false,
    type: 'text',
    value: 'Lorem Ipsum',
};
const template = (args: TextFieldComponent & { [key: string]: any }) =>
    `<ui-textfield
      ${args.id ? `id="${args.id}"` : ''}
      ${args.variant ? `variant="${args.variant}"` : ''}
      ${args.status ? `size="${args.status}"` : ''}
      ${args.size ? `size="${args.size}"` : ''}
      ${args['iconLeft'] ? `iconLeft="${args['iconLeft']}"` : ''}
      ${args['iconRight'] ? `iconRight="${args['iconRight']}"` : ''}
      (onClickIconLeft)="onClickIconLeft($event)"
      (onClickIconRight)="onClickIconRight($event)"
    >
         ${args['label'] ? `<label>${args['label']}</label>` : ''}
         <input
            type="${args['type']}"
            value="${args['value']}"
            [disabled]="${args['disabled']}"
            placeholder="Insira um valor"
         />
         ${args['small'] ? `<small>${args['small']}</small>` : ''}
    </ui-textfield>`;

const meta: Meta<TextFieldComponent & { [key: string]: any }> = {
    title: 'Molecules/Textfield',
    component: TextFieldComponent,
    tags: ['autodocs'],
    render: (args: TextFieldComponent & { [key: string]: any }) => ({
        props: { ...args, ...argsDefault },
        styles: [`ui-textfield { display: block; max-width: 300px; }`],
    }),
    argTypes: {
        variant: {
            control: { type: 'select' },
        },
        status: {
            control: { type: 'select' },
        },
        size: {
            options: [undefined, 'small', 'medium'],
            control: { type: 'select' },
        },
        type: {
            options: [
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
            ],
            control: { type: 'select' },
        },
    },
    decorators: [
        moduleMetadata({
            declarations: [IconComponent],
            imports: [DirectivesModule],
        }),
    ],
};

export default meta;

type Story = StoryObj<TextFieldComponent & { [key: string]: any }>;

export const Default: Story = {
    args: {
        ...argsDefault,
    },
    render: (args) => ({
        props: args,
        template: template(args),
        styles: [`ui-textfield { display: block; max-width: 300px; }`],
    }),
};

export const Label: Story = {
    args: {
        ...argsDefault,
        label: 'Label',
    },
    render: (args) => ({
        props: args,
        template: template(args),
        styles: [`ui-textfield { display: block; max-width: 300px; }`],
    }),
};

export const Hint: Story = {
    args: {
        ...argsDefault,
        small: 'hint',
    },
    render: (args) => ({
        props: args,
        template: template(args),
        styles: [`ui-textfield { display: block; max-width: 300px; }`],
    }),
};

export const Variant: Story = {
    args: {
        ...argsDefault,
        variant: 'text',
    },
    render: (args) => ({
        props: args,
        template: template(args),
        styles: [`ui-textfield { display: block; max-width: 300px; }`],
    }),
};

export const Status: Story = {
    args: {
        ...argsDefault,
        status: 'error',
    },
    render: (args) => ({
        props: args,
        template: template(args),
        styles: [`ui-textfield { display: block; max-width: 300px; }`],
    }),
};

export const Large: Story = {
    args: {
        ...argsDefault,
        size: 'large',
    },
    render: (args) => ({
        props: args,
        template: template(args),
        styles: [`ui-textfield { display: block; max-width: 300px; }`],
    }),
};

export const Small: Story = {
    args: {
        ...argsDefault,
        size: 'small',
    },
    render: (args) => ({
        props: args,
        template: template(args),
        styles: [`ui-textfield { display: block; max-width: 300px; }`],
    }),
};

export const Type: Story = {
    args: {
        ...argsDefault,
        type: 'number',
    },
    render: (args) => ({
        props: args,
        template: template(args),
        styles: [`ui-textfield { display: block; max-width: 300px; }`],
    }),
};

export const IconLeft: Story = {
    args: {
        ...argsDefault,
        type: 'email',
        label: 'Email',
        iconLeft: 'at',
        small: '',
    },
    render: (args) => ({
        props: args,
        template: template(args),
        styles: [`ui-textfield { display: block; max-width: 300px; }`],
    }),
};

export const IconRight: Story = {
    args: {
        ...argsDefault,
        type: 'search',
        label: 'Search',
        iconRight: 'search',
        small: '',
    },
    render: (args) => ({
        props: args,
        template: template(args),
        styles: [`ui-textfield { display: block; max-width: 300px; }`],
    }),
};

export const Disabled: Story = {
    args: {
        ...argsDefault,
        disabled: true,
    },
    render: (args) => ({
        props: args,
        template: template(args),
        styles: [`ui-textfield { display: block; max-width: 300px; }`],
    }),
};

export const Textarea: Story = {
    args: {
        ...argsDefault,
        label: 'Label',
        small: 'hint',
    },
    render: (args) => ({
        props: args,
        template: `
        <ui-textfield id="${args.id}" variant="${args.variant}" status="${args.status}" size="${args.size}">
            <label>${args['label']}</label>
            <textarea rows="1" [disabled]="${args['disabled']}"></textarea>
            <small>${args['small']}</small>
        </ui-textfield>`,
        styles: [`ui-textfield { display: block; max-width: 300px; }`],
    }),
};
