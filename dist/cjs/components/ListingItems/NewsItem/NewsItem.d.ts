import React from 'react';
type BaseItemTypeProps = 'li' | 'div';
type TitleTypeProps = 'h2' | 'h3';
export interface NewsItemProps {
    children?: React.ReactNode;
    fontSize?: 'base' | 'lg' | 'xl';
    title?: string;
    link?: string;
    cost?: string;
    image?: string;
    alt?: string;
    date?: string;
    excerpt?: string;
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
export declare const NewsItem: {
    ({ as: Component, children, link }: BaseItemProps & NewsItemProps): JSX.Element;
    defaultProps: {
        as: string;
    };
    displayName: string;
} & {
    Content: {
        ({ children }: NewsItemProps): JSX.Element;
        displayName: string;
    };
    Title: {
        ({ as, fontSize, title }: TitleProps & NewsItemProps): React.DetailedReactHTMLElement<{
            className: string;
        }, HTMLElement>;
        displayName: string;
    };
    Image: {
        ({ image, alt }: NewsItemProps): JSX.Element;
        displayName: string;
    };
    Date: {
        ({ date }: NewsItemProps): JSX.Element;
        displayName: string;
    };
    Excerpt: {
        ({ excerpt }: NewsItemProps): JSX.Element;
        displayName: string;
    };
};
export {};
