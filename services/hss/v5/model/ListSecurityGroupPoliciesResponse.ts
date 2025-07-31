import { SecurityGroupPolicyResponseInfo } from './SecurityGroupPolicyResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityGroupPoliciesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<SecurityGroupPolicyResponseInfo>;
    private 'last_update_time'?: number;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListSecurityGroupPoliciesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<SecurityGroupPolicyResponseInfo>): ListSecurityGroupPoliciesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<SecurityGroupPolicyResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<SecurityGroupPolicyResponseInfo> | undefined {
        return this['data_list'];
    }
    public withLastUpdateTime(lastUpdateTime: number): ListSecurityGroupPoliciesResponse {
        this['last_update_time'] = lastUpdateTime;
        return this;
    }
    public set lastUpdateTime(lastUpdateTime: number  | undefined) {
        this['last_update_time'] = lastUpdateTime;
    }
    public get lastUpdateTime(): number | undefined {
        return this['last_update_time'];
    }
}