import React from 'react';
import { IconName } from '../HeroIcon';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    title?: string;
    icon?: IconName;
    isType?: 'default' | 'ghost' | 'grey' | 'dark-grey' | 'white' | 'disabled';
    size?: 'sm' | 'base';
    hasShadow?: boolean;
    isFull?: boolean;
    isCenter?: boolean;
    isDisabled?: boolean;
    hasDropDown?: boolean;
    url?: string | undefined;
}
export declare const Button: ({ isType, size, title, icon, hasShadow, isFull, isCenter, url, isDisabled, hasDropDown, ...rest }: ButtonProps) => JSX.Element;
