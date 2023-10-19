

export class ParamGroupParameterDifferences {
    private 'parameter_name'?: string;
    private 'source_value'?: string;
    private 'target_value'?: string;
    public constructor() { 
    }
    public withParameterName(parameterName: string): ParamGroupParameterDifferences {
        this['parameter_name'] = parameterName;
        return this;
    }
    public set parameterName(parameterName: string  | undefined) {
        this['parameter_name'] = parameterName;
    }
    public get parameterName(): string | undefined {
        return this['parameter_name'];
    }
    public withSourceValue(sourceValue: string): ParamGroupParameterDifferences {
        this['source_value'] = sourceValue;
        return this;
    }
    public set sourceValue(sourceValue: string  | undefined) {
        this['source_value'] = sourceValue;
    }
    public get sourceValue(): string | undefined {
        return this['source_value'];
    }
    public withTargetValue(targetValue: string): ParamGroupParameterDifferences {
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