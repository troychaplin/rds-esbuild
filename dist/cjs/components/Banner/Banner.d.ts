import React from 'react';
export interface BannerProps {
    children?: React.ReactNode;
    title?: string;
    paragraph?: string;
    fontSize?: '5xl' | '6xl';
    maxWidth?: 'none' | 'full' | '5xl' | '7xl';
    isType?: 'light-grey' | 'light-fade' | 'dark-wave' | 'red-wave' | 'image' | 'animated';
    align?: 'center' | 'left';
    hasOverlap?: boolean;
    image?: string;
    imageAlt?: string;
}
export interface BannerImgProps {
    image?: string;
    imageAlt?: string;
}
export declare const Banner: {
    ({ children, title, paragraph, maxWidth, isType, fontSize, align, hasOverlap, image, imageAlt, }: BannerProps & BannerImgProps): JSX.Element;
    displayName: string;
} & {
    ButtonGroup: {
        ({ children }: BannerProps): JSX.Element;
        displayName: string;
    };
};
