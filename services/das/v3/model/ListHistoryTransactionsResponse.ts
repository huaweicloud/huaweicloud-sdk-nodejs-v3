import { TransactionInfo } from './TransactionInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHistoryTransactionsResponse extends SdkResponse {
    public total?: number;
    private 'transaction_info_list'?: Array<TransactionInfo>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListHistoryTransactionsResponse {
        this['total'] = total;
        return this;
    }
    public withTransactionInfoList(transactionInfoList: Array<TransactionInfo>): ListHistoryTransactionsResponse {
        this['transaction_info_list'] = transactionInfoList;
        return this;
    }
    public set transactionInfoList(transactionInfoList: Array<TransactionInfo>  | undefined) {
        this['transaction_info_list'] = transactionInfoList;
    }
    public get transactionInfoList(): Array<TransactionInfo> | undefined {
        return this['transaction_info_list'];
    }
}