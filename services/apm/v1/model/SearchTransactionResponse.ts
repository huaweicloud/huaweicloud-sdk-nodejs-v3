import { TxItemVo } from './TxItemVo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class SearchTransactionResponse extends SdkResponse {
    private 'tx_item_list'?: Array<TxItemVo>;
    private 'latest_time'?: number;
    private 'total_count'?: number;
    private 'result_id'?: string;
    public constructor() { 
        super();
    }
    public withTxItemList(txItemList: Array<TxItemVo>): SearchTransactionResponse {
        this['tx_item_list'] = txItemList;
        return this;
    }
    public set txItemList(txItemList: Array<TxItemVo>  | undefined) {
        this['tx_item_list'] = txItemList;
    }
    public get txItemList(): Array<TxItemVo> | undefined {
        return this['tx_item_list'];
    }
    public withLatestTime(latestTime: number): SearchTransactionResponse {
        this['latest_time'] = latestTime;
        return this;
    }
    public set latestTime(latestTime: number  | undefined) {
        this['latest_time'] = latestTime;
    }
    public get latestTime(): number | undefined {
        return this['latest_time'];
    }
    public withTotalCount(totalCount: number): SearchTransactionResponse {
        this['total_count'] = totalCount;
        return this;
    }
    public set totalCount(totalCount: number  | undefined) {
        this['total_count'] = totalCount;
    }
    public get totalCount(): number | undefined {
        return this['total_count'];
    }
    public withResultId(resultId: string): SearchTransactionResponse {
        this['result_id'] = resultId;
        return this;
    }
    public set resultId(resultId: string  | undefined) {
        this['result_id'] = resultId;
    }
    public get resultId(): string | undefined {
        return this['result_id'];
    }
}