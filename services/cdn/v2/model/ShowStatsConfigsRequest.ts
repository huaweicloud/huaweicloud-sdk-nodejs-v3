

export class ShowStatsConfigsRequest {
    private 'config_type'?: number;
    public limit?: number;
    public offset?: number;
    public constructor(configType?: number) { 
        this['config_type'] = configType;
    }
    public withConfigType(configType: number): ShowStatsConfigsRequest {
        this['config_type'] = configType;
        return this;
    }
    public set configType(configType: number  | undefined) {
        this['config_type'] = configType;
    }
    public get configType(): number | undefined {
        return this['config_type'];
    }
    public withLimit(limit: number): ShowStatsConfigsRequest {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): ShowStatsConfigsRequest {
        this['offset'] = offset;
        return this;
    }
}