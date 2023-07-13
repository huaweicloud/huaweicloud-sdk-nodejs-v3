

export class ConfigBody {
    private 'config_key': string | undefined;
    private 'config_value': string | undefined;
    private 'config_status'?: string | undefined;
    public constructor(configKey?: any, configValue?: any) { 
        this['config_key'] = configKey;
        this['config_value'] = configValue;
    }
    public withConfigKey(configKey: string): ConfigBody {
        this['config_key'] = configKey;
        return this;
    }
    public set configKey(configKey: string | undefined) {
        this['config_key'] = configKey;
    }
    public get configKey() {
        return this['config_key'];
    }
    public withConfigValue(configValue: string): ConfigBody {
        this['config_value'] = configValue;
        return this;
    }
    public set configValue(configValue: string | undefined) {
        this['config_value'] = configValue;
    }
    public get configValue() {
        return this['config_value'];
    }
    public withConfigStatus(configStatus: string): ConfigBody {
        this['config_status'] = configStatus;
        return this;
    }
    public set configStatus(configStatus: string | undefined) {
        this['config_status'] = configStatus;
    }
    public get configStatus() {
        return this['config_status'];
    }
}