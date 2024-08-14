import { type HTMLAttributes } from 'vue';
import { type PopoverContentProps } from 'radix-vue';
declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<PopoverContentProps & {
    class?: HTMLAttributes["class"];
}>, {
    align: string;
    sideOffset: number;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    escapeKeyDown: (event: KeyboardEvent) => void;
    pointerDownOutside: (event: import("radix-vue/dist/DismissableLayer").PointerDownOutsideEvent) => void;
    focusOutside: (event: import("radix-vue/dist/DismissableLayer").FocusOutsideEvent) => void;
    interactOutside: (event: import("radix-vue/dist/DismissableLayer").PointerDownOutsideEvent | import("radix-vue/dist/DismissableLayer").FocusOutsideEvent) => void;
    openAutoFocus: (event: Event) => void;
    closeAutoFocus: (event: Event) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<PopoverContentProps & {
    class?: HTMLAttributes["class"];
}>, {
    align: string;
    sideOffset: number;
}>>> & {
    onEscapeKeyDown?: ((event: KeyboardEvent) => any) | undefined;
    onPointerDownOutside?: ((event: import("radix-vue/dist/DismissableLayer").PointerDownOutsideEvent) => any) | undefined;
    onFocusOutside?: ((event: import("radix-vue/dist/DismissableLayer").FocusOutsideEvent) => any) | undefined;
    onInteractOutside?: ((event: import("radix-vue/dist/DismissableLayer").PointerDownOutsideEvent | import("radix-vue/dist/DismissableLayer").FocusOutsideEvent) => any) | undefined;
    onOpenAutoFocus?: ((event: Event) => any) | undefined;
    onCloseAutoFocus?: ((event: Event) => any) | undefined;
}, {
    sideOffset: number;
    align: import("radix-vue/dist/Popper").Align;
}, {}>;
declare const _default: __VLS_WithTemplateSlots<typeof __VLS_component, ReturnType<typeof __VLS_template>>;
export default _default;
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
type __VLS_WithTemplateSlots<T, S> = T & {
    new (): {
        $slots: S;
    };
};
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToOption<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
