

export class ListParamsTemplateApplyHistoryRequest {
    private 'config_id'?: string;
    public limit?: number;
    public offset?: number;
    public constructor(configId?: string) { 
        this['config_id'] = configId;
    }
    public withConfigId(configId: string): ListParamsTemplateApplyHistoryRequest {
        this['config_id'] = configId;
        return this;
    }
    public set configId(configId: string  | undefined) {
        this['config_id'] = configId;
    }
    public get configId(): string | undefined {
        return this['config_id'];
    }
    public withLimit(limit: number): ListParamsTemplateApplyHistoryRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ListParamsTemplateApplyHistoryRequest {
        this['offset'] = offset;
        return this;
    }
}