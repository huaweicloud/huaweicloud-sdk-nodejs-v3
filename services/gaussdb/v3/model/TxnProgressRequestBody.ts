

export class TxnProgressRequestBody {
    public action?: TxnProgressRequestBodyActionEnum | string;
    private 'transaction_ids'?: Array<string>;
    public limit?: number;
    public offset?: number;
    public constructor(action?: string) { 
        this['action'] = action;
    }
    public withAction(action: TxnProgressRequestBodyActionEnum | string): TxnProgressRequestBody {
        this['action'] = action;
        return this;
    }
    public withTransactionIds(transactionIds: Array<string>): TxnProgressRequestBody {
        this['transaction_ids'] = transactionIds;
        return this;
    }
    public set transactionIds(transactionIds: Array<string>  | undefined) {
        this['transaction_ids'] = transactionIds;
    }
    public get transactionIds(): Array<string> | undefined {
        return this['transaction_ids'];
    }
    public withLimit(limit: number): TxnProgressRequestBody {
        this['limit'] = limit;
        return this;
    }
    public withOffset(offset: number): TxnProgressRequestBody {
        this['offset'] = offset;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum TxnProgressRequestBodyActionEnum {
    ROLLBACK = 'rollback'
}
