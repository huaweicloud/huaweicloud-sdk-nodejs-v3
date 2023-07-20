

export class UpdateInstanceConfigurationRequestBody {
    public values?: { [key: string]: string; };
    public constructor(values?: { [key: string]: string; }) { 
        this['values'] = values;
    }
    public withValues(values: { [key: string]: string; }): UpdateInstanceConfigurationRequestBody {
        this['values'] = values;
        return this;
    }
}