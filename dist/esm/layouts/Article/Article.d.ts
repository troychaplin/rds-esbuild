import React from 'react';
type BaseArticleTypeProps = 'article' | 'section' | 'div';
export interface ArticleBaseProps {
    as?: keyof JSX.IntrinsicElements;
}
export interface ArticleProps {
    children?: React.ReactNode;
    as?: BaseArticleTypeProps;
    hasProse?: boolean;
    content?: string;
    bgColor?: 'white' | 'grey';
    maxWidth?: 'none' | 'full' | '5xl' | '7xl';
}
export declare const Article: ({ children, content }: ArticleProps) => JSX.Element;
export {};
