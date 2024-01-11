

export class ParameterInfo {
    private 'parameter_name'?: string;
    private 'parameter_value'?: string;
    public constructor(parameterName?: string, parameterValue?: string) { 
        this['parameter_name'] = parameterName;
        this['parameter_value'] = parameterValue;
    }
    public withParameterName(parameterName: string): ParameterInfo {
        this['parameter_name'] = parameterName;
        return this;
    }
    public set parameterName(parameterName: string  | undefined) {
        this['parameter_name'] = parameterName;
    }
    public get parameterName(): string | undefined {
        return this['parameter_name'];
    }
    public withParameterValue(parameterValue: string): ParameterInfo {
        this['parameter_value'] = parameterValue;
        return this;
    }
    public set parameterValue(parameterValue: string  | undefined) {
        this['parameter_value'] = parameterValue;
    }
    public get parameterValue(): string | undefined {
        return this['parameter_value'];
    }
}