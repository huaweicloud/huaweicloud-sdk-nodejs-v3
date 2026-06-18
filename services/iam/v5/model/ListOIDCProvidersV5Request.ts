

export class ListOIDCProvidersV5Request {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListOIDCProvidersV5Request {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListOIDCProvidersV5Request {
        this['marker'] = marker;
        return this;
    }
}