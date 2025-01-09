

export class UpdateShareSpaceConfigReq {
    private 'config_name'?: string;
    private 'config_value'?: string;
    public constructor() { 
    }
    public withConfigName(configName: string): UpdateShareSpaceConfigReq {
        this['config_name'] = configName;
        return this;
    }
    public set configName(configName: string  | undefined) {
        this['config_name'] = configName;
    }
    public get configName(): string | undefined {
        return this['config_name'];
    }
    public withConfigValue(configValue: string): UpdateShareSpaceConfigReq {
        this['config_value'] = configValue;
        return this;
    }
    public set configValue(configValue: string  | undefined) {
        this['config_value'] = configValue;
    }
    public get configValue(): string | undefined {
        return this['config_value'];
    }
}