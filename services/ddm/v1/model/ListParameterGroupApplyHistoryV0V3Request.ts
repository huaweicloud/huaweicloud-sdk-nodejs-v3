

export class ListParameterGroupApplyHistoryV0V3Request {
    private 'config_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withConfigId(configId: string): ListParameterGroupApplyHistoryV0V3Request {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withOffset(offset: number): ListParameterGroupApplyHistoryV0V3Request {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListParameterGroupApplyHistoryV0V3Request {
        this['limit'] = limit;
        return this;
    }
}