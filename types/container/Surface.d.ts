import { ReactNode, CSSProperties, SVGProps } from 'react';
interface SurfaceProps {
    width: number;
    height: number;
    viewBox?: {
        x?: number;
        y?: number;
        width?: number;
        height?: number;
    };
    className?: string;
    style?: CSSProperties;
    children?: ReactNode;
    title?: string;
    desc?: string;
}
export declare type Props = Omit<SVGProps<SVGSVGElement>, 'viewBox'> & SurfaceProps;
export declare function Surface(props: Props): JSX.Element;
export {};
