

export class ShowTechnicalAssetsStatisticRequest {
    public workspace?: string;
    public tag?: string;
    public offset?: number;
    public limit?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ShowTechnicalAssetsStatisticRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withTag(tag: string): ShowTechnicalAssetsStatisticRequest {
        this['tag'] = tag;
        return this;
    }
    public withOffset(offset: number): ShowTechnicalAssetsStatisticRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowTechnicalAssetsStatisticRequest {
        this['limit'] = limit;
        return this;
    }
}