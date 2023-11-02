

export class ShowBusinessAssetsStatisticRequest {
    public workspace?: string;
    public offset?: number;
    public limit?: number;
    public constructor(workspace?: string) { 
        this['workspace'] = workspace;
    }
    public withWorkspace(workspace: string): ShowBusinessAssetsStatisticRequest {
        this['workspace'] = workspace;
        return this;
    }
    public withOffset(offset: number): ShowBusinessAssetsStatisticRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowBusinessAssetsStatisticRequest {
        this['limit'] = limit;
        return this;
    }
}