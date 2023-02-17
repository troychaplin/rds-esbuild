export interface PaginationProps {
    hasBorder?: boolean;
    hasSpacing?: boolean;
    totalCount: number;
    siblingCount: number;
    pageSize: number;
    callback: any;
}
export declare const Pagination: ({ hasBorder, hasSpacing, totalCount, siblingCount, pageSize, callback, }: PaginationProps) => JSX.Element | null;
