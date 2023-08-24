import { ProtectionPolicyInfo } from './ProtectionPolicyInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListProtectionPolicyResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<ProtectionPolicyInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListProtectionPolicyResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<ProtectionPolicyInfo>): ListProtectionPolicyResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<ProtectionPolicyInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<ProtectionPolicyInfo> | undefined {
        return this['data_list'];
    }
}