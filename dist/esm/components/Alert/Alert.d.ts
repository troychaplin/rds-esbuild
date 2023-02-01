export interface AlerterProps {
    children?: any;
}
export interface AlertBaseProps {
    children?: any;
    type: 'success' | 'error' | 'warning' | 'info';
}
export interface AlertTitleProps {
    children?: any;
}
export interface AlertContentProps {
    children?: any;
}
export declare const Alert: {
    ({ children, type }: AlertBaseProps): JSX.Element;
    displayName: string;
} & {
    Alerter: ({ children }: AlerterProps) => JSX.Element;
    Title: {
        ({ children }: AlertTitleProps): JSX.Element;
        displayName: string;
    };
    Content: {
        ({ children }: AlertContentProps): JSX.Element;
        displayName: string;
    };
};
