

export class DiffDetails {
    private 'parameter_name'?: string;
    private 'source_value'?: string;
    private 'target_value'?: string;
    public constructor(parameterName?: string, sourceValue?: string, targetValue?: string) { 
        this['parameter_name'] = parameterName;
        this['source_value'] = sourceValue;
        this['target_value'] = targetValue;
    }
    public withParameterName(parameterName: string): DiffDetails {
        this['parameter_name'] = parameterName;
        return this;
    }
    public set parameterName(parameterName: string  | undefined) {
        this['parameter_name'] = parameterName;
    }
    public get parameterName(): string | undefined {
        return this['parameter_name'];
    }
    public withSourceValue(sourceValue: string): DiffDetails {
        this['source_value'] = sourceValue;
        return this;
    }
    public set sourceValue(sourceValue: string  | undefined) {
        this['source_value'] = sourceValue;
    }
    public get sourceValue(): string | undefined {
        return this['source_value'];
    }
    public withTargetValue(targetValue: string): DiffDetails {
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