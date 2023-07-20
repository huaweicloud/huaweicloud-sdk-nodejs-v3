

export class ConfigBody {
    private 'config_key'?: string;
    private 'config_value'?: string;
    private 'config_status'?: string;
    public constructor(configKey?: string, configValue?: string) { 
        this['config_key'] = configKey;
        this['config_value'] = configValue;
    }
    public withConfigKey(configKey: string): ConfigBody {
        this['config_key'] = configKey;
        return this;
    }
    public set configKey(configKey: string  | undefined) {
        this['config_key'] = configKey;
    }
    public get configKey(): string | undefined {
        return this['config_key'];
    }
    public withConfigValue(configValue: string): ConfigBody {
        this['config_value'] = configValue;
        return this;
    }
    public set configValue(configValue: string  | undefined) {
        this['config_value'] = configValue;
    }
    public get configValue(): string | undefined {
        return this['config_value'];
    }
    public withConfigStatus(configStatus: string): ConfigBody {
        this['config_status'] = configStatus;
        return this;
    }
    public set configStatus(configStatus: string  | undefined) {
        this['config_status'] = configStatus;
    }
    public get configStatus(): string | undefined {
        return this['config_status'];
    }
}