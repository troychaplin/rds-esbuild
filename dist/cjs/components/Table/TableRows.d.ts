import { ColumnDefinitionType } from './Table';
type TableRowsProps<T, K extends keyof T> = {
    data: Array<T>;
    columns: Array<ColumnDefinitionType<T, K>>;
    striped: boolean;
    range: number[];
};
declare const TableRows: <T, K extends keyof T>({ data, columns, striped, range, }: TableRowsProps<T, K>) => JSX.Element;
export default TableRows;
