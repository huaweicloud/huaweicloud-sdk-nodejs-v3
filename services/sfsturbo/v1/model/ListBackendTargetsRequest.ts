

export class ListBackendTargetsRequest {
    private 'share_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(shareId?: string) { 
        this['share_id'] = shareId;
    }
    public withShareId(shareId: string): ListBackendTargetsRequest {
        this['share_id'] = shareId;
        return this;
    }
    public set shareId(shareId: string  | undefined) {
        this['share_id'] = shareId;
    }
    public get shareId(): string | undefined {
        return this['share_id'];
    }
    public withLimit(limit: number): ListBackendTargetsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListBackendTargetsRequest {
        this['marker'] = marker;
        return this;
    }
}