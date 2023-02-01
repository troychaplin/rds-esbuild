type BaseItemTypeProps = 'article' | 'div';
export interface ItemBaseProps {
    as?: keyof JSX.IntrinsicElements;
}
export interface ProseProps {
    as?: BaseItemTypeProps;
    content: string;
}
export declare const Prose: ({ as: Component, content }: ProseProps) => JSX.Element;
export {};
