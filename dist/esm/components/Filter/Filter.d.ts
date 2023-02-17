export interface FilterProps {
    sortOptions?: {
        name: string;
        href: string;
        current: boolean;
    }[];
    filters: {
        id: string;
        name: string;
        options: {
            value: string;
            label: string;
            checked: boolean;
        }[];
    }[];
    callback: any;
}
export declare const Filter: ({ sortOptions, filters, callback }: FilterProps) => JSX.Element;
