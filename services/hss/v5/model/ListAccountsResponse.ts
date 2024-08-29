import { AccountResponseInfo } from './AccountResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAccountsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<AccountResponseInfo>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListAccountsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<AccountResponseInfo>): ListAccountsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AccountResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AccountResponseInfo> | undefined {
        return this['data_list'];
    }
    public withXRequestId(xRequestId: string): ListAccountsResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}