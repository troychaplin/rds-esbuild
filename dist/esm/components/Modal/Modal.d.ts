import React from 'react';
export interface ModalProps {
    children?: React.ReactNode;
    title?: String;
    description?: String;
    noButton?: boolean;
    isOpen: any;
    setIsOpen: any;
    hasOverlay?: boolean;
}
export declare const Modal: ({ children, title, description, noButton, isOpen, setIsOpen, hasOverlay, }: ModalProps) => JSX.Element;
