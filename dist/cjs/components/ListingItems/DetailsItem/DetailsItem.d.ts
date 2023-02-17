import React from 'react';
import { IconName } from '../../HeroIcon';
type BaseItemTypeProps = 'li' | 'div';
type TitleTypeProps = 'h2' | 'h3';
export interface DetailsItemProps {
    children?: React.ReactNode;
    fontSize?: 'base' | 'lg' | 'xl';
    title?: string;
    description?: string;
    icon?: IconName;
}
export interface ItemBaseProps {
    as?: keyof JSX.IntrinsicElements;
}
export interface BaseItemProps {
    as?: BaseItemTypeProps;
}
export interface TitleProps {
    as?: TitleTypeProps;
}
export declare const DetailsItem: {
    ({ as: Component, children }: ItemBaseProps & DetailsItemProps): JSX.Element;
    defaultProps: {
        as: string;
    };
    displayName: string;
} & {
    Content: {
        ({ children }: DetailsItemProps): JSX.Element;
        displayName: string;
    };
    Title: {
        ({ as, fontSize, title }: TitleProps & DetailsItemProps): React.DetailedReactHTMLElement<{
            className: string;
        }, HTMLElement>;
        displayName: string;
    };
    Icon: {
        ({ icon }: DetailsItemProps): JSX.Element;
        displayName: string;
    };
    Description: {
        ({ description }: DetailsItemProps): JSX.Element;
        displayName: string;
    };
};
export {};
