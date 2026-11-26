

export class ListStsCredentialProvidersRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListStsCredentialProvidersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListStsCredentialProvidersRequest {
        this['marker'] = marker;
        return this;
    }
}