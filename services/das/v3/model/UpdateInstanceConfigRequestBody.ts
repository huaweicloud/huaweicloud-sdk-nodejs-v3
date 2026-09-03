

export class UpdateInstanceConfigRequestBody {
    private 'config_type'?: string;
    private 'config_value'?: string;
    private 'engine_type'?: string;
    public constructor(configType?: string, configValue?: string, engineType?: string) { 
        this['config_type'] = configType;
        this['config_value'] = configValue;
        this['engine_type'] = engineType;
    }
    public withConfigType(configType: string): UpdateInstanceConfigRequestBody {
        this['config_type'] = configType;
        return this;
    }
    public set configType(configType: string  | undefined) {
        this['config_type'] = configType;
    }
    public get configType(): string | undefined {
        return this['config_type'];
    }
    public withConfigValue(configValue: string): UpdateInstanceConfigRequestBody {
        this['config_value'] = configValue;
        return this;
    }
    public set configValue(configValue: string  | undefined) {
        this['config_value'] = configValue;
    }
    public get configValue(): string | undefined {
        return this['config_value'];
    }
    public withEngineType(engineType: string): UpdateInstanceConfigRequestBody {
        this['engine_type'] = engineType;
        return this;
    }
    public set engineType(engineType: string  | undefined) {
        this['engine_type'] = engineType;
    }
    public get engineType(): string | undefined {
        return this['engine_type'];
    }
}