import { TxnItem } from './TxnItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowTaurusDbTxnProgressResponse extends SdkResponse {
    public transactions?: Array<TxnItem>;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withTransactions(transactions: Array<TxnItem>): ShowTaurusDbTxnProgressResponse {
        this['transactions'] = transactions;
        return this;
    }
    public withTotalCount(totalCount: number): ShowTaurusDbTxnProgressResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
}