

export class ResetConfigurationRequest {
    private 'X-Language'?: string;
    private 'config_id'?: string;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withXLanguage(xLanguage: string): ResetConfigurationRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withConfigId(configId: string): ResetConfigurationRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
}