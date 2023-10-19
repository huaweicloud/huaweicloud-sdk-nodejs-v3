

export class ListModifyHistoryRequest {
    private 'X-Language'?: string;
    private 'configuration_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(configurationId?: string) { 
        this['configuration_id'] = configurationId;
    }
    public withXLanguage(xLanguage: string): ListModifyHistoryRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withConfigurationId(configurationId: string): ListModifyHistoryRequest {
        this['configuration_id'] = configurationId;
        return this;
    }
    public set configurationId(configurationId: string  | undefined) {
        this['configuration_id'] = configurationId;
    }
    public get configurationId(): string | undefined {
        return this['configuration_id'];
    }
    public withOffset(offset: number): ListModifyHistoryRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListModifyHistoryRequest {
        this['limit'] = limit;
        return this;
    }
}