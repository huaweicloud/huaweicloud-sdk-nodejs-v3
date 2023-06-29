

export class ListAggregationAuthorizationsRequest {
    private 'account_id'?: string | undefined;
    public limit?: number;
    public marker?: string;
    public constructor() { 
    }
    public withAccountId(accountId: string): ListAggregationAuthorizationsRequest {
        this['account_id'] = accountId;
        return this;
    }
    public set accountId(accountId: string | undefined) {
        this['account_id'] = accountId;
    }
    public get accountId() {
        return this['account_id'];
    }
    public withLimit(limit: number): ListAggregationAuthorizationsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): ListAggregationAuthorizationsRequest {
        this['marker'] = marker;
        return this;
    }
}