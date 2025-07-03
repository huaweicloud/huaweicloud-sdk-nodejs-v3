import { TransactionConfigItem } from './TransactionConfigItem';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchTransactionConfigResponse extends SdkResponse {
    private 'transaction_config_item_list'?: Array<TransactionConfigItem>;
    private 'total_page'?: number;
    private 'total_count'?: number;
    public constructor() { 
        super();
    }
    public withTransactionConfigItemList(transactionConfigItemList: Array<TransactionConfigItem>): SearchTransactionConfigResponse {
        this['transaction_config_item_list'] = transactionConfigItemList;
        return this;
    }
    public set transactionConfigItemList(transactionConfigItemList: Array<TransactionConfigItem>  | undefined) {
        this['transaction_config_item_list'] = transactionConfigItemList;
    }
    public get transactionConfigItemList(): Array<TransactionConfigItem> | undefined {
        return this['transaction_config_item_list'];
    }
    public withTotalPage(totalPage: number): SearchTransactionConfigResponse {
        this['total_page'] = totalPage;
        return this;
    }
    public set totalPage(totalPage: number  | undefined) {
        this['total_page'] = totalPage;
    }
    public get totalPage(): number | undefined {
        return this['total_page'];
    }
    public withTotalCount(totalCount: number): SearchTransactionConfigResponse {
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