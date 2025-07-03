

export class ConfigItem {
    private 'config_name'?: string;
    private 'config_value'?: string;
    private 'should_override'?: boolean;
    public constructor() { 
    }
    public withConfigName(configName: string): ConfigItem {
        this['config_name'] = configName;
        return this;
    }
    public set configName(configName: string  | undefined) {
        this['config_name'] = configName;
    }
    public get configName(): string | undefined {
        return this['config_name'];
    }
    public withConfigValue(configValue: string): ConfigItem {
        this['config_value'] = configValue;
        return this;
    }
    public set configValue(configValue: string  | undefined) {
        this['config_value'] = configValue;
    }
    public get configValue(): string | undefined {
        return this['config_value'];
    }
    public withShouldOverride(shouldOverride: boolean): ConfigItem {
        this['should_override'] = shouldOverride;
        return this;
    }
    public set shouldOverride(shouldOverride: boolean  | undefined) {
        this['should_override'] = shouldOverride;
    }
    public get shouldOverride(): boolean | undefined {
        return this['should_override'];
    }
}