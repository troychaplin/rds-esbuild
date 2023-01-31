import React from 'react';
export interface ColumnProps {
    children: React.ReactNode;
    maxWidth?: 'none' | 'full' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl';
    gridGap?: '0' | '0.5' | '1' | '2' | '4' | '8' | '10';
    cols?: '1' | '2' | '3' | '4' | '1/3' | '2/3';
    isNested?: boolean;
}
export declare const Column: ({ children, maxWidth, gridGap, cols }: ColumnProps) => JSX.Element;
