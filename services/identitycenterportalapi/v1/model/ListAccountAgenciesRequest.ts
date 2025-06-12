

export class ListAccountAgenciesRequest {
    private 'access-token'?: string;
    public limit?: number;
    public marker?: string;
    private 'account_id'?: string;
    public constructor(accessToken?: string, accountId?: string) { 
        this['access-token'] = accessToken;
        this['account_id'] = accountId;
    }
    public withAccessToken(accessToken: string): ListAccountAgenciesRequest {
        this['access-token'] = accessToken;
        return this;
    }
    public set accessToken(accessToken: string  | undefined) {
        this['access-token'] = accessToken;
    }
    public get accessToken(): string | undefined {
        return this['access-token'];
    }
    public withLimit(limit: number): ListAccountAgenciesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAccountAgenciesRequest {
        this['marker'] = marker;
        return this;
    }
    public withAccountId(accountId: string): ListAccountAgenciesRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
}