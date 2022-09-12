export type TTObject = { [key: string]: any };

type TMode = "normal" | "partial" | "specific";

export type TOption = {
  mode: TMode;
  requiredPartial?: number;
  specificKey?: string;
};
