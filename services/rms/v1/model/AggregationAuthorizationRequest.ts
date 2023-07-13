

export class AggregationAuthorizationRequest {
    private 'authorized_account_id': string | undefined;
    public constructor(authorizedAccountId?: any) { 
        this['authorized_account_id'] = authorizedAccountId;
    }
    public withAuthorizedAccountId(authorizedAccountId: string): AggregationAuthorizationRequest {
        this['authorized_account_id'] = authorizedAccountId;
        return this;
    }
    public set authorizedAccountId(authorizedAccountId: string | undefined) {
        this['authorized_account_id'] = authorizedAccountId;
    }
    public get authorizedAccountId() {
        return this['authorized_account_id'];
    }
}