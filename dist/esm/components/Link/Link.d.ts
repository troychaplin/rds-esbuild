/// <reference types="node" />
import React from 'react';
import { UrlObject } from 'url';
type Url = string | UrlObject;
export interface LinkProps {
    href: URL | string;
    as?: Url;
    wrapper?: any;
    component?: string;
    className?: string;
    replace?: boolean;
    soft?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    prefetch?: boolean;
    locale?: string | false;
    target?: string;
    children: any;
    onMouseEnter?: (e: any) => void;
    onClick?: (e: any) => void;
}
export declare const Link: React.ForwardRefExoticComponent<LinkProps & React.RefAttributes<unknown>>;
export {};
