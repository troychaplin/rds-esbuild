export interface ColumnDefinitionType<T, K extends keyof T> {
    key: K;
    header: string;
    sort?: {
        sortable: boolean;
    };
}
export interface TableProps<T, K extends keyof T> {
    data: Array<T>;
    columns: Array<ColumnDefinitionType<T, K>>;
    hasStripes?: boolean;
    hasShadow?: boolean;
    hasBorder?: boolean;
    range?: number[];
}
export declare const Table: <T, K extends keyof T>({ data, columns, hasStripes, hasShadow, hasBorder, range, }: TableProps<T, K>) => JSX.Element;
