import { AppWhitelistPolicyHostResponseInfo } from './AppWhitelistPolicyHostResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAppWhitelistPolicyHostResponse extends SdkResponse {
    private 'data_list'?: Array<AppWhitelistPolicyHostResponseInfo>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<AppWhitelistPolicyHostResponseInfo>): ListAppWhitelistPolicyHostResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AppWhitelistPolicyHostResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AppWhitelistPolicyHostResponseInfo> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): ListAppWhitelistPolicyHostResponse {
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