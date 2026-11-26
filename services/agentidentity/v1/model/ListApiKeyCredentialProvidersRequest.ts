

export class ListApiKeyCredentialProvidersRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListApiKeyCredentialProvidersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListApiKeyCredentialProvidersRequest {
        this['marker'] = marker;
        return this;
    }
}