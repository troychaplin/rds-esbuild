import { Tags } from '../../../types/Tags';
export interface PeopleCardProps {
    firstName: string;
    lastName: string;
    designation?: string;
    email: string;
    phoneNumber?: string;
    tags?: Tags;
    profileImage?: any;
    link?: string;
}
export declare const PeopleCard: ({ firstName, lastName, email, phoneNumber, tags, designation, profileImage, link, }: PeopleCardProps) => JSX.Element;
