

export class ListSecretsRequest {
    public limit?: string;
    public marker?: string;
    public constructor() { 
    }
    public withLimit(limit: string): ListSecretsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListSecretsRequest {
        this['marker'] = marker;
        return this;
    }
}