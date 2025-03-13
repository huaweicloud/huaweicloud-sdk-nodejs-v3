

export class ListP2cVgwsRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListP2cVgwsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListP2cVgwsRequest {
        this['marker'] = marker;
        return this;
    }
}