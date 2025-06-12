

export class ListAccountsRequest {
    private 'access-token'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(accessToken?: string) { 
        this['access-token'] = accessToken;
    }
    public withAccessToken(accessToken: string): ListAccountsRequest {
        this['access-token'] = accessToken;
        return this;
    }
    public set accessToken(accessToken: string  | undefined) {
        this['access-token'] = accessToken;
    }
    public get accessToken(): string | undefined {
        return this['access-token'];
    }
    public withLimit(limit: number): ListAccountsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAccountsRequest {
        this['marker'] = marker;
        return this;
    }
}