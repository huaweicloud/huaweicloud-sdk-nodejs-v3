

export class ShowUserAccessStagesRequest {
    private 'transaction_id'?: string;
    public constructor(transactionId?: string) { 
        this['transaction_id'] = transactionId;
    }
    public withTransactionId(transactionId: string): ShowUserAccessStagesRequest {
        this['transaction_id'] = transactionId;
        return this;
    }
    public set transactionId(transactionId: string  | undefined) {
        this['transaction_id'] = transactionId;
    }
    public get transactionId(): string | undefined {
        return this['transaction_id'];
    }
}