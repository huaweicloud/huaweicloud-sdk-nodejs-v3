

export class ShowBandwidthDetailRequest {
    public offset?: number;
    public limit?: number;
    public constructor() { 
    }
    public withOffset(offset: number): ShowBandwidthDetailRequest {
        this['offset'] = offset;
        return this;
    }
    public withLimit(limit: number): ShowBandwidthDetailRequest {
        this['limit'] = limit;
        return this;
    }
}