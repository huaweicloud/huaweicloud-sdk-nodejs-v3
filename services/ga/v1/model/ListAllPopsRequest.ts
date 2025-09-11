

export class ListAllPopsRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListAllPopsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAllPopsRequest {
        this['marker'] = marker;
        return this;
    }
}