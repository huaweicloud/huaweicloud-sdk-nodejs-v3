

export class ListDelegatedServicesRequest {
    private 'account_id'?: string;
    public limit?: number;
    public marker?: string;
    public constructor(accountId?: string) { 
        this['account_id'] = accountId;
    }
    public withAccountId(accountId: string): ListDelegatedServicesRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string  | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId(): string | undefined {
        return this['account_id'];
    }
    public withLimit(limit: number): ListDelegatedServicesRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListDelegatedServicesRequest {
        this['marker'] = marker;
        return this;
    }
}