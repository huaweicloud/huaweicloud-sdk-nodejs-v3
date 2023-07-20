

export class ListPipelineTemplatesRequest {
    private 'X-Language'?: string;
    private 'region_id'?: string;
    public offset?: number;
    public limit?: number;
    public constructor(regionId?: string) { 
        this['region_id'] = regionId;
    }
    public withXLanguage(xLanguage: string): ListPipelineTemplatesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string  | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage(): string | undefined {
        return this['X-Language'];
    }
    public withRegionId(regionId: string): ListPipelineTemplatesRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string  | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId(): string | undefined {
        return this['region_id'];
    }
    public withOffset(offset: number): ListPipelineTemplatesRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ListPipelineTemplatesRequest {
        this['limit'] = limit;
        return this;
    }
}