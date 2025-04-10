import { AgentPolicyInfo } from './AgentPolicyInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPoliciesResponse extends SdkResponse {
    private 'data_list'?: Array<AgentPolicyInfo>;
    private 'total_num'?: number;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<AgentPolicyInfo>): ListPoliciesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AgentPolicyInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AgentPolicyInfo> | undefined {
        return this['data_list'];
    }
    public withTotalNum(totalNum: number): ListPoliciesResponse {
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