export interface VideoCardProps {
    source: any;
    tags?: Tags;
}
interface Tags {
    category: {
        id: number;
        name: string;
        slug: string;
    }[];
}
export declare function VideoCard({ source, tags }: VideoCardProps): JSX.Element;
export {};
