import React from 'react';
export interface MainProps {
    children: React.ReactNode;
    hasOverlap?: boolean;
    hasSpacing?: boolean;
}
export declare const Main: ({ children, hasOverlap, hasSpacing }: MainProps) => JSX.Element;
