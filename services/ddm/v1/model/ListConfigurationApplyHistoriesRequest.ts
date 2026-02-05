

export class ListConfigurationApplyHistoriesRequest {
    private 'config_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withConfigId(configId: string): ListConfigurationApplyHistoriesRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withOffset(offset: number): ListConfigurationApplyHistoriesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListConfigurationApplyHistoriesRequest {
        this['limit'] = limit;
        return this;
    }
}