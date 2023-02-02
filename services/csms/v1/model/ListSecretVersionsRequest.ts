

export class ListSecretVersionsRequest {
    private 'secret_name': string | undefined;
    public marker?: string;
    public limit?: number;
    public constructor(secretName?: any) { 
        this['secret_name'] = secretName;
    }
    public withSecretName(secretName: string): ListSecretVersionsRequest {
        this['secret_name'] = secretName;
        return this;
    }
    public set secretName(secretName: string | undefined) {
        this['secret_name'] = secretName;
    }
    public get secretName() {
        return this['secret_name'];
    }
    public withMarker(marker: string): ListSecretVersionsRequest {
        this['marker'] = marker;
        return this;
    }
    public withLimit(limit: number): ListSecretVersionsRequest {
        this['limit'] = limit;
        return this;
    }
}