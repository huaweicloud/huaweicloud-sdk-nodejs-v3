

export class UpdateConfigurationParameterRequestBody {
    public name?: string;
    public description?: string;
    private 'parameter_values'?: { [key: string]: string; };
    public constructor() { 
    }
    public withName(name: string): UpdateConfigurationParameterRequestBody {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateConfigurationParameterRequestBody {
        this['description'] = description;
        return this;
    }
    public withParameterValues(parameterValues: { [key: string]: string; }): UpdateConfigurationParameterRequestBody {
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