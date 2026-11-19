import { SecurityCheckPolicyGroupHostInfo } from './SecurityCheckPolicyGroupHostInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityCheckPolicyGroupHostsResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<SecurityCheckPolicyGroupHostInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListSecurityCheckPolicyGroupHostsResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<SecurityCheckPolicyGroupHostInfo>): ListSecurityCheckPolicyGroupHostsResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<SecurityCheckPolicyGroupHostInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<SecurityCheckPolicyGroupHostInfo> | undefined {
        return this['data_list'];
    }
}