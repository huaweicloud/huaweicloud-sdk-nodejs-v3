

export class ListFsTasksRequest {
    private 'share_id'?: string;
    public feature?: string;
    public marker?: string;
    public limit?: number;
    public constructor(shareId?: string, feature?: string) { 
        this['share_id'] = shareId;
        this['feature'] = feature;
    }
    public withShareId(shareId: string): ListFsTasksRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withFeature(feature: string): ListFsTasksRequest {
        this['feature'] = feature;
        return this;
    }
    public withMarker(marker: string): ListFsTasksRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListFsTasksRequest {
        this['limit'] = limit;
        return this;
    }
}