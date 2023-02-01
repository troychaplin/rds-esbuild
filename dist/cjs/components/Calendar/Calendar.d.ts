export interface CalendarProps {
    events?: {
        id: number;
        name: string;
        imageUrl: string;
        startDatetime: string;
        endDatetime: string;
    }[];
    callback: any;
}
export declare const Calendar: ({ events, callback }: CalendarProps) => JSX.Element;
