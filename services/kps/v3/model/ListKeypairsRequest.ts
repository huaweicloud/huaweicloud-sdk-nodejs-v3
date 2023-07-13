

export class ListKeypairsRequest {
    public limit?: string;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: string): ListKeypairsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListKeypairsRequest {
        this['marker'] = marker;
        return this;
    }
}