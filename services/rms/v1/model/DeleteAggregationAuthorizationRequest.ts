

export class DeleteAggregationAuthorizationRequest {
    private 'authorized_account_id'?: string;
    public constructor(authorizedAccountId?: string) { 
        this['authorized_account_id'] = authorizedAccountId;
    }
    public withAuthorizedAccountId(authorizedAccountId: string): DeleteAggregationAuthorizationRequest {
        this['authorized_account_id'] = authorizedAccountId;
        return this;
    }
    public set authorizedAccountId(authorizedAccountId: string  | undefined) {
        this['authorized_account_id'] = authorizedAccountId;
    }
    public get authorizedAccountId(): string | undefined {
        return this['authorized_account_id'];
    }
}