

export class ListOauth2CredentialProvidersRequest {
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: number): ListOauth2CredentialProvidersRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListOauth2CredentialProvidersRequest {
        this['marker'] = marker;
        return this;
    }
}