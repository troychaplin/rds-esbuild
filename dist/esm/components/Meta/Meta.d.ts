import React from 'react';
export interface MetaProps {
    description?: string;
    children?: React.ReactNode;
}
export interface TitleProps {
    title?: string;
}
export interface IconsProps {
    path?: string;
}
export interface SocialProps {
    type: string;
    card?: string;
    title?: string;
    image?: string;
    description?: string;
}
export declare const Meta: {
    ({ description, children }: MetaProps): JSX.Element;
    displayName: string;
} & {
    Title: {
        ({ title }: TitleProps): JSX.Element;
        displayName: string;
    };
    Icons: {
        ({ path }: IconsProps): JSX.Element;
        displayName: string;
    };
    Social: {
        ({ type, card, title, image, description }: SocialProps): JSX.Element;
        displayName: string;
    };
};
