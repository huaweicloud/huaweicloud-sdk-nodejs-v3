import { PolicyGroupResponseInfo } from './PolicyGroupResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListPolicyGroupResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<PolicyGroupResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListPolicyGroupResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<PolicyGroupResponseInfo>): ListPolicyGroupResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<PolicyGroupResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<PolicyGroupResponseInfo> | undefined {
        return this['data_list'];
    }
}