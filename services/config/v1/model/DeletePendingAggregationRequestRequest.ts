

export class DeletePendingAggregationRequestRequest {
    private 'requester_account_id'?: string;
    public constructor(requesterAccountId?: string) { 
        this['requester_account_id'] = requesterAccountId;
    }
    public withRequesterAccountId(requesterAccountId: string): DeletePendingAggregationRequestRequest {
        this['requester_account_id'] = requesterAccountId;
        return this;
    }
    public set requesterAccountId(requesterAccountId: string  | undefined) {
        this['requester_account_id'] = requesterAccountId;
    }
    public get requesterAccountId(): string | undefined {
        return this['requester_account_id'];
    }
}