import React from 'react';

import { SVG, IProps as IPropsSVG } from './index';

export interface IProps {
    svg?: IPropsSVG
}

export const IconSettings = (props: IProps) => (
    <SVG {...props.svg}>
        <path fillRule="evenodd" d="m18.656 20.897 2.217-2.217-.78-2.837.34-.813L23 13.582v-3.136l-2.56-1.454-.335-.811.791-2.839-2.219-2.215-2.837.78-.81-.34L13.58 1h-3.135L8.991 3.56l-.811.334-2.838-.791-2.215 2.215.78 2.838-.34.81L1 10.416v3.134l2.558 1.458.335.811-.791 2.838 2.216 2.216 2.838-.78.81.34 1.45 2.566h3.134l1.457-2.558.811-.334 2.838.79Zm.197-7.271-.872 2.082.655 2.38-.568.569-2.376-.662-2.083.86-1.222 2.144h-.804l-1.212-2.146-2.08-.872-2.382.655-.567-.567.662-2.376-.86-2.083L3 12.388v-.805l2.147-1.212.872-2.08-.655-2.382.566-.566 2.376.663 2.084-.86L11.61 3h.803l1.211 2.147 2.08.872 2.383-.655.569.568-.662 2.375.86 2.084L21 11.61v.803l-2.147 1.212ZM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm2-4a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" clipRule="evenodd" />
    </SVG>
);

export default IconSettings;
