import React from 'react';
export interface BannerProps {
    children?: React.ReactNode;
    title?: string;
    paragraph?: string;
    fontSize?: '4xl' | '5xl' | '6xl';
    isType?: 'light-fade' | 'dark-wave' | 'red-wave' | 'image';
    align?: 'vertical' | 'horizontal';
    hasOverlap?: boolean;
    image?: string;
    imageAlt?: string;
}
export interface BannerImgProps {
    image?: string;
    imageAlt?: string;
}
export declare const Banner: {
    ({ children, title, paragraph, isType, fontSize, align, hasOverlap, image, imageAlt, }: BannerProps & BannerImgProps): JSX.Element;
    displayName: string;
} & {
    ButtonGroup: {
        ({ children }: BannerProps): JSX.Element;
        displayName: string;
    };
};
