

export class ListSecretEventsRequest {
    public limit?: string;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: string): ListSecretEventsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSecretEventsRequest {
        this['marker'] = marker;
        return this;
    }
}