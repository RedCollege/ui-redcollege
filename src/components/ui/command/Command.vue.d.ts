import { type HTMLAttributes } from 'vue';
import type { ComboboxRootProps } from 'radix-vue';
declare function __VLS_template(): {
    default?(_: {}): any;
};
declare const __VLS_component: import("vue").DefineComponent<__VLS_WithDefaults<__VLS_TypePropsToOption<ComboboxRootProps<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue> & {
    class?: HTMLAttributes["class"];
}>, {
    open: boolean;
    modelValue: string;
}>, {}, unknown, {}, {}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {
    "update:modelValue": (value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue) => void;
    "update:open": (value: boolean) => void;
    "update:searchTerm": (value: string) => void;
    "update:selectedValue": (value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue | undefined) => void;
}, string, import("vue").PublicProps, Readonly<import("vue").ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToOption<ComboboxRootProps<import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue> & {
    class?: HTMLAttributes["class"];
}>, {
    open: boolean;
    modelValue: string;
}>>> & {
    "onUpdate:modelValue"?: ((value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue) => any) | undefined;
    "onUpdate:open"?: ((value: boolean) => any) | undefined;
    "onUpdate:searchTerm"?: ((value: string) => any) | undefined;
    "onUpdate:selectedValue"?: ((value: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue | undefined) => any) | undefined;
}, {
    modelValue: import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue | import("radix-vue/dist/Combobox/ComboboxRoot").AcceptableValue[];
    open: boolean;
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
