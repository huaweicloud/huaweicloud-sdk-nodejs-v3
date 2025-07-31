import { AppWhitelistPolicyProcessResponseInfo } from './AppWhitelistPolicyProcessResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppWhitelistPolicyProcessResponse extends SdkResponse {
    private 'data_list'?: Array<AppWhitelistPolicyProcessResponseInfo>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<AppWhitelistPolicyProcessResponseInfo>): ListAppWhitelistPolicyProcessResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AppWhitelistPolicyProcessResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AppWhitelistPolicyProcessResponseInfo> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): ListAppWhitelistPolicyProcessResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
}