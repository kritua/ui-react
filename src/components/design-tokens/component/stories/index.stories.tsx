import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Docs from './index.docs.mdx';
import { DesignTokens } from '../index';

const META: ComponentMeta<typeof DesignTokens> = {
    title    : 'Design Tokens/Component',
    component: DesignTokens,
    args     : {
        children: 'Любое содержимое из типа ReactNode'
    },
    argTypes: {
        children: {
            control: 'text'
        },
        className: {
            control: 'text'
        }
    },
    parameters: {
        docs: {
            page: Docs
        }
    }
};

export default META;

const Template: ComponentStory<typeof DesignTokens> = (props) => <DesignTokens {...props} />;

export const Component = Template.bind({});
