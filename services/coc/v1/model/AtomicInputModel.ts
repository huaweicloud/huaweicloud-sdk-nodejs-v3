

export class AtomicInputModel {
    private 'param_key'?: string;
    private 'param_name_zh'?: string;
    private 'param_name_en'?: string;
    public required?: boolean;
    private 'param_type'?: string;
    public min?: number;
    public max?: number;
    private 'min_len'?: number;
    private 'max_len'?: number;
    public pattern?: string;
    public constructor() { 
    }
    public withParamKey(paramKey: string): AtomicInputModel {
        this['param_key'] = paramKey;
        return this;
    }
    public set paramKey(paramKey: string  | undefined) {
        this['param_key'] = paramKey;
    }
    public get paramKey(): string | undefined {
        return this['param_key'];
    }
    public withParamNameZh(paramNameZh: string): AtomicInputModel {
        this['param_name_zh'] = paramNameZh;
        return this;
    }
    public set paramNameZh(paramNameZh: string  | undefined) {
        this['param_name_zh'] = paramNameZh;
    }
    public get paramNameZh(): string | undefined {
        return this['param_name_zh'];
    }
    public withParamNameEn(paramNameEn: string): AtomicInputModel {
        this['param_name_en'] = paramNameEn;
        return this;
    }
    public set paramNameEn(paramNameEn: string  | undefined) {
        this['param_name_en'] = paramNameEn;
    }
    public get paramNameEn(): string | undefined {
        return this['param_name_en'];
    }
    public withRequired(required: boolean): AtomicInputModel {
        this['required'] = required;
        return this;
    }
    public withParamType(paramType: string): AtomicInputModel {
        this['param_type'] = paramType;
        return this;
    }
    public set paramType(paramType: string  | undefined) {
        this['param_type'] = paramType;
    }
    public get paramType(): string | undefined {
        return this['param_type'];
    }
    public withMin(min: number): AtomicInputModel {
        this['min'] = min;
        return this;
    }
    public withMax(max: number): AtomicInputModel {
        this['max'] = max;
        return this;
    }
    public withMinLen(minLen: number): AtomicInputModel {
        this['min_len'] = minLen;
        return this;
    }
    public set minLen(minLen: number  | undefined) {
        this['min_len'] = minLen;
    }
    public get minLen(): number | undefined {
        return this['min_len'];
    }
    public withMaxLen(maxLen: number): AtomicInputModel {
        this['max_len'] = maxLen;
        return this;
    }
    public set maxLen(maxLen: number  | undefined) {
        this['max_len'] = maxLen;
    }
    public get maxLen(): number | undefined {
        return this['max_len'];
    }
    public withPattern(pattern: string): AtomicInputModel {
        this['pattern'] = pattern;
        return this;
    }
}