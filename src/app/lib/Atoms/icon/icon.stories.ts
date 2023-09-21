import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { IconComponent } from '../../Atoms';
import { DirectivesModule } from '../../Utils/directives';

const meta: Meta<IconComponent & { [key: string]: any }> = {
    title: 'Atoms/Icon',
    component: IconComponent,
    tags: ['autodocs'],
    render: (args: IconComponent & { [key: string]: any }) => ({
        props: {
            name: 'user',
            size: '24px',
            ...args,
        },
    }),
    argTypes: {
        color: {
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

type Story = StoryObj<IconComponent & { [key: string]: any }>;

export const Default: Story = {};

export const Color: Story = {
    args: {
        color: 'error',
    },
};

export const Size: Story = {
    args: {
        size: '40px',
    },
};
