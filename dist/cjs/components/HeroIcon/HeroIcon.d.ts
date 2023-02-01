import * as SolidIcons from '@heroicons/react/24/solid';
import * as OutlineIcons from '@heroicons/react/24/outline';
export type IconName = keyof typeof SolidIcons | keyof typeof OutlineIcons;
export interface HeroIconProps {
    icon: IconName;
    isOutline?: boolean;
    color?: 'black' | 'white' | 'red' | 'grey' | 'dark-grey' | 'green' | 'yellow';
    size?: '4' | '5' | '6' | '7' | '8' | '12' | '16' | '20';
}
export declare const HeroIcon: ({ icon, isOutline, color, size }: HeroIconProps) => JSX.Element;
