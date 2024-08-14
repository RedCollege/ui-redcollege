import { type VariantProps } from 'class-variance-authority';
export { default as Button } from './Button.vue';
export declare const buttonVariants: (props?: ({
    variant?: "default" | "link" | "destructive" | "outline" | "secondary" | "ghost" | null | undefined;
    size?: "default" | "sm" | "lg" | "xs" | "icon" | null | undefined;
} & import("class-variance-authority/dist/types.js").ClassProp) | undefined) => string;
export type ButtonVariants = VariantProps<typeof buttonVariants>;
