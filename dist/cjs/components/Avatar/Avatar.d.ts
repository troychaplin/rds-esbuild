import React from 'react';
import { UserInfoType } from '../../types/UserInfo';
export interface AvatarProps {
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '4xl';
    rounded?: 'lg' | 'full';
    borderWidth?: '1' | '2' | '4' | '8';
    borderColor?: 'black' | 'white' | 'red' | 'grey' | 'dark-grey';
    hasShadow?: boolean;
    user: UserInfoType;
    onClick?: (event: React.MouseEvent<HTMLElement, MouseEvent>) => void;
}
export declare const Avatar: ({ size, rounded, borderWidth, borderColor, hasShadow, user, onClick, }: AvatarProps) => JSX.Element;
