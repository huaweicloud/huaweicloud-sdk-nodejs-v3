

export class ParamGroupParameterDiffV3 {
    public name?: string;
    private 'source_value'?: string;
    private 'target_value'?: string;
    public constructor() { 
    }
    public withName(name: string): ParamGroupParameterDiffV3 {
        this['name'] = name;
        return this;
    }
    public withSourceValue(sourceValue: string): ParamGroupParameterDiffV3 {
        this['source_value'] = sourceValue;
        return this;
    }
    public set sourceValue(sourceValue: string  | undefined) {
        this['source_value'] = sourceValue;
    }
    public get sourceValue(): string | undefined {
        return this['source_value'];
    }
    public withTargetValue(targetValue: string): ParamGroupParameterDiffV3 {
        this['target_value'] = targetValue;
        return this;
    }
    public set targetValue(targetValue: string  | undefined) {
        this['target_value'] = targetValue;
    }
    public get targetValue(): string | undefined {
        return this['target_value'];
    }
}