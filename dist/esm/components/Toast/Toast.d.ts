export interface ToasterProps {
    children?: any;
}
export interface ToastBaseProps {
    children?: any;
    type: 'success' | 'error' | 'warning' | 'info';
}
export interface ToastTitleProps {
    children?: any;
}
export interface ToastContentProps {
    children?: any;
}
export declare const Toast: {
    ({ children, type }: ToastBaseProps): JSX.Element;
    displayName: string;
} & {
    Toaster: ({ children }: ToasterProps) => JSX.Element;
    Title: {
        ({ children }: ToastTitleProps): JSX.Element;
        displayName: string;
    };
    Content: {
        ({ children }: ToastContentProps): JSX.Element;
        displayName: string;
    };
};
