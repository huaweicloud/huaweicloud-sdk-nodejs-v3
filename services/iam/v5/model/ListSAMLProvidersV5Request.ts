

export class ListSAMLProvidersV5Request {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListSAMLProvidersV5Request {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSAMLProvidersV5Request {
        this['marker'] = marker;
        return this;
    }
}