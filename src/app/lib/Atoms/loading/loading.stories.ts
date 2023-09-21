import { Meta, StoryObj, moduleMetadata } from '@storybook/angular';
import { LoadingComponent } from './loading.component';

const meta: Meta<LoadingComponent & { [key: string]: any }> = {
    title: 'Atoms/Loading',
    component: LoadingComponent,
    tags: ['autodocs'],
    render: (args: LoadingComponent & { [key: string]: any }) => ({
        props: {
            size: '24px',
            ...args,
            color: 'principal',
        },
    }),
    decorators: [
        moduleMetadata({
            declarations: [LoadingComponent],
        }),
    ],

    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

export default meta;

type Story = StoryObj<LoadingComponent & { [key: string]: any }>;

export const Default: Story = {};

export const Color: Story = {
    args: {
        color: 'principal',
    },
};

export const Size: Story = {
    args: {
        size: '40px',
    },
};
