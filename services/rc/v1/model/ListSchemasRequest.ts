

export class ListSchemasRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListSchemasRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSchemasRequest {
        this['marker'] = marker;
        return this;
    }
}