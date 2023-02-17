import React from 'react';
import { UserInfoType } from '../../types/UserInfo';
export interface LinkProps {
    title: string;
    link: string;
    active: boolean;
}
export interface mobileLoginProps {
    title: string;
    link?: string;
    onClick?: (event: React.MouseEvent<MouseEvent | HTMLAnchorElement>) => void;
}
export interface TopNavProps {
    title: string;
    logoUrl?: string;
    brand?: string;
    login?: React.ReactNode;
    hasSearch?: boolean;
    sourceData?: any;
    children?: React.ReactNode;
    sticky?: boolean;
    navLinks?: LinkProps[];
    mobileLinks?: LinkProps[];
    userMenuItems?: any;
    userInfo?: UserInfoType;
    searchOn?: string;
    mobileLogin?: mobileLoginProps;
}
export declare const TopNav: ({ children, logoUrl, title, brand, hasSearch, sourceData, searchOn, navLinks, mobileLinks, userMenuItems, userInfo, sticky, login, mobileLogin, }: TopNavProps) => JSX.Element;
