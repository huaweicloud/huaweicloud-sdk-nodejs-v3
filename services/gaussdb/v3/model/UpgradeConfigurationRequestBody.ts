

export class UpgradeConfigurationRequestBody {
    public parameters?: Array<string>;
    public constructor() { 
    }
    public withParameters(parameters: Array<string>): UpgradeConfigurationRequestBody {
        this['parameters'] = parameters;
        return this;
    }
}