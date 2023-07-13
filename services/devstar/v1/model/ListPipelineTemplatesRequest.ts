

export class ListPipelineTemplatesRequest {
    private 'X-Language'?: string | undefined;
    private 'region_id': string | undefined;
    public offset?: number;
    public limit?: number;
    public constructor(regionId?: any) { 
        this['region_id'] = regionId;
    }
    public withXLanguage(xLanguage: string): ListPipelineTemplatesRequest {
        this['X-Language'] = xLanguage;
        return this;
    }
    public set xLanguage(xLanguage: string | undefined) {
        this['X-Language'] = xLanguage;
    }
    public get xLanguage() {
        return this['X-Language'];
    }
    public withRegionId(regionId: string): ListPipelineTemplatesRequest {
        this['region_id'] = regionId;
        return this;
    }
    public set regionId(regionId: string | undefined) {
        this['region_id'] = regionId;
    }
    public get regionId() {
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