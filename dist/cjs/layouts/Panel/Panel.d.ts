import React from 'react';
export interface PanelProps {
    children: React.ReactNode;
    hasBorder?: boolean;
    hasShadow?: boolean;
    hasGap?: boolean;
}
export declare const Panel: {
    ({ children, hasBorder, hasShadow }: PanelProps): JSX.Element;
    displayName: string;
} & {
    Title: {
        ({ children }: any): JSX.Element;
        displayName: string;
    };
};
