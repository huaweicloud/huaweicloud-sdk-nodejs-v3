

export class UpdateInstanceConfigurationsRequestBody {
    private 'parameter_values'?: { [key: string]: string; };
    public constructor(parameterValues?: { [key: string]: string; }) { 
        this['parameter_values'] = parameterValues;
    }
    public withParameterValues(parameterValues: { [key: string]: string; }): UpdateInstanceConfigurationsRequestBody {
        this['parameter_values'] = parameterValues;
        return this;
    }
    public set parameterValues(parameterValues: { [key: string]: string; }  | undefined) {
        this['parameter_values'] = parameterValues;
    }
    public get parameterValues(): { [key: string]: string; } | undefined {
        return this['parameter_values'];
    }
}