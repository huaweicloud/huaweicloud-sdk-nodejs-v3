

export class CorpConfigInfo {
    private 'config_key'?: string;
    private 'config_value'?: string;
    public constructor() { 
    }
    public withConfigKey(configKey: string): CorpConfigInfo {
        this['config_key'] = configKey;
        return this;
    }
    public set configKey(configKey: string  | undefined) {
        this['config_key'] = configKey;
    }
    public get configKey(): string | undefined {
        return this['config_key'];
    }
    public withConfigValue(configValue: string): CorpConfigInfo {
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