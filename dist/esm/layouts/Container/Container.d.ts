import React from 'react';
export interface ContainerProps {
    children: React.ReactNode;
    bgColor?: 'none' | 'grey';
}
export declare const Container: ({ children, bgColor }: ContainerProps) => JSX.Element;
