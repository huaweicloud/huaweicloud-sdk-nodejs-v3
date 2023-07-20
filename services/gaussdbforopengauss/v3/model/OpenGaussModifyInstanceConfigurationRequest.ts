

export class OpenGaussModifyInstanceConfigurationRequest {
    public values?: { [key: string]: string; };
    public constructor(values?: { [key: string]: string; }) { 
        this['values'] = values;
    }
    public withValues(values: { [key: string]: string; }): OpenGaussModifyInstanceConfigurationRequest {
        this['values'] = values;
        return this;
    }
}