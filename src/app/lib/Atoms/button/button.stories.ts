import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { DirectivesModule } from '../../Utils/directives';
import { IconComponent } from '../icon';
import { ButtonComponent } from './button.component';

const meta: Meta<ButtonComponent> = {
    title: 'Atoms/Button',
    component: ButtonComponent,
    tags: ['autodocs'],
    render: (args: ButtonComponent) => ({
        props: {
            id: false,
            label: 'BUTTON',
            ...args,
        },
    }),
    argTypes: {
        variant: {
            control: { type: 'select' },
        },
        schema: {
            control: { type: 'select' },
        },
        type: {
            control: { type: 'select' },
        },
        size: {
            options: [undefined, 'small', 'large'],
            control: { type: 'select' },
        },
    },
    decorators: [
        moduleMetadata({
            declarations: [IconComponent],
            imports: [DirectivesModule],
        }),
    ],
    parameters: {
        actions: { argTypesRegex: '^on*' },
    },
};

export default meta;

type Story = StoryObj<ButtonComponent>;

export const Primary: Story = {
    args: {
        variant: 'primary',
    },
};

export const Secondary: Story = {
    args: {
        variant: 'secondary',
    },
};

export const Text: Story = {
    args: {
        variant: 'text',
    },
};

export const Large: Story = {
    args: {
        size: 'large',
    },
};

export const Small: Story = {
    args: {
        size: 'small',
    },
};

export const Full: Story = {
    args: {
        full: true,
    },
};

export const Loading: Story = {
    args: {
        loading: true,
    },
};

export const Icon: Story = {
    args: {
        variant: 'primary',
        iconLeft: 'arrow-left',
        iconRight: 'arrow-right',
    },
};

export const IconOnly: Story = {
    args: {
        variant: 'primary',
        iconOnly: 'arrow-right',
        iconLeft: 'arrow-left',
        iconRight: 'arrow-right',
    },
};
