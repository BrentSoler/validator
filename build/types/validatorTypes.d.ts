export declare type TTObject = {
    [key: string]: any;
};
declare type TMode = "normal" | "partial" | "specific";
export declare type TOption = {
    mode: TMode;
    requiredPartial?: number;
    specificKey?: string;
};
export {};
