import { PolicyInfo } from './PolicyInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRaspPoliciesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<PolicyInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListRaspPoliciesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<PolicyInfo>): ListRaspPoliciesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<PolicyInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<PolicyInfo> | undefined {
        return this['data_list'];
    }
}