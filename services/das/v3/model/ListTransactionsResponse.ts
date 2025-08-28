import { GetTransactionListRespTransactionInfoList } from './GetTransactionListRespTransactionInfoList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListTransactionsResponse extends SdkResponse {
    public total?: number;
    private 'transaction_info_list'?: Array<GetTransactionListRespTransactionInfoList>;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListTransactionsResponse {
        this['total'] = total;
        return this;
    }
    public withTransactionInfoList(transactionInfoList: Array<GetTransactionListRespTransactionInfoList>): ListTransactionsResponse {
        this['transaction_info_list'] = transactionInfoList;
        return this;
    }
    public set transactionInfoList(transactionInfoList: Array<GetTransactionListRespTransactionInfoList>  | undefined) {
        this['transaction_info_list'] = transactionInfoList;
    }
    public get transactionInfoList(): Array<GetTransactionListRespTransactionInfoList> | undefined {
        return this['transaction_info_list'];
    }
}