

export class ListAreasRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListAreasRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAreasRequest {
        this['marker'] = marker;
        return this;
    }
}