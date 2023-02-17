import { ColumnDefinitionType } from './Table';
type TableHeaderProps<T, K extends keyof T> = {
    columns: Array<ColumnDefinitionType<T, K>>;
    sortData: any;
};
declare const TableHeader: <T, K extends keyof T>({ columns, sortData }: TableHeaderProps<T, K>) => JSX.Element;
export default TableHeader;
