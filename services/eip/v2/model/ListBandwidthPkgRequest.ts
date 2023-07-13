

export class ListBandwidthPkgRequest {
    public limit?: number;
    public marker?: string;
    public offset?: number;
    public constructor() { 
    }
    public withLimit(limit: number): ListBandwidthPkgRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListBandwidthPkgRequest {
        this['marker'] = marker;
        return this;
    }
    public withOffset(offset: number): ListBandwidthPkgRequest {
        this['offset'] = offset;
        return this;
    }
}