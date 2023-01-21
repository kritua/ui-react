import React from 'react';
import renderer from 'react-test-renderer';

import { Button } from './../index';
import { IconVideo } from './../../icons/video';
import { IconCircleMenu } from './../../icons/circle-menu';

const CHILDREN = 'Рыбный текст кнопки';

describe('Button', () => {
    it('Default', () => {
        const tree = renderer.create(<Button children={CHILDREN} />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('isLoader', () => {
        const tree = renderer.create(<Button children={CHILDREN} isLoading={true} />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('isCompact', () => {
        const tree = renderer.create(<Button children={CHILDREN} isCompact={true} />).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('Icon + Text', () => {
        const tree = renderer.create(
            <Button>
                <IconVideo />
                {CHILDREN}
            </Button>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('Icon', () => {
        const tree = renderer.create(
            <Button>
                <IconVideo />
            </Button>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('Multi icon', () => {
        const tree = renderer.create(
            <Button>
                <IconVideo />
                <IconCircleMenu />
            </Button>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });

    it('SVG', () => {
        const tree = renderer.create(
            <Button>
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18">
                    <path fill="#fff" d="m7.172 11.4 6.794-6.9L15 5.55 7.172 13.5 3 9.263l1.034-1.05L7.172 11.4Z" />
                </svg>
            </Button>
        ).toJSON();

        expect(tree).toMatchSnapshot();
    });
});
