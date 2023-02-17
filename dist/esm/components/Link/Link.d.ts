import React from 'react';
export interface LinkProps {
    ref?: any;
    href?: string | undefined;
    as?: string | undefined;
    replace?: boolean;
    scroll?: boolean;
    shallow?: boolean;
    passHref?: boolean;
    prefetch?: boolean;
    locale?: string | false;
    legacyBehavior?: boolean;
    children?: any;
    className?: string;
    onMouseEnter?: React.MouseEventHandler<HTMLAnchorElement>;
    onTouchStart?: React.TouchEventHandler<HTMLAnchorElement>;
    onClick?: React.MouseEventHandler<HTMLAnchorElement>;
}
export declare const Link: React.ForwardRefExoticComponent<Omit<LinkProps, "ref"> & React.RefAttributes<unknown>>;
