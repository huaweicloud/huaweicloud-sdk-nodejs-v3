

export class ListCgwsRequest {
    private 'cgw_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withCgwId(cgwId: string): ListCgwsRequest {
        this['cgw_id'] = cgwId;
        return this;
    }
    public set cgwId(cgwId: string  | undefined) {
        this['cgw_id'] = cgwId;
    }
    public get cgwId(): string | undefined {
        return this['cgw_id'];
    }
    public withLimit(limit: number): ListCgwsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListCgwsRequest {
        this['marker'] = marker;
        return this;
    }
}