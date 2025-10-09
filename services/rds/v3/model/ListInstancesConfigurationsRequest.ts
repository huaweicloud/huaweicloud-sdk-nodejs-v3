

export class ListInstancesConfigurationsRequest {
    private 'config_id'?: string;
    public offset?: number;
    public limit?: number;
    private 'X-Language'?: string;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withConfigId(configId: string): ListInstancesConfigurationsRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withOffset(offset: number): ListInstancesConfigurationsRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListInstancesConfigurationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withXLanguage(xLanguage: string): ListInstancesConfigurationsRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
}