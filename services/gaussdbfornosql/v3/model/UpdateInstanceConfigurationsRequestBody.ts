

export class UpdateInstanceConfigurationsRequestBody {
    public values?: { [key: string]: string; };
    public constructor(values?: { [key: string]: string; }) { 
        this['values'] = values;
    }
    public withValues(values: { [key: string]: string; }): UpdateInstanceConfigurationsRequestBody {
        this['values'] = values;
        return this;
    }
}