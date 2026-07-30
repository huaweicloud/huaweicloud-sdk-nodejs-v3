import { AiPolicyInfo } from './AiPolicyInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListAiPoliciesResponse extends SdkResponse {
    private 'data_list'?: Array<AiPolicyInfo>;
    public constructor() { 
        super();
    }
    public withDataList(dataList: Array<AiPolicyInfo>): ListAiPoliciesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<AiPolicyInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<AiPolicyInfo> | undefined {
        return this['data_list'];
    }
}