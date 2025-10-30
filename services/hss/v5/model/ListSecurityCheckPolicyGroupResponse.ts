import { SecurityCheckPolicyGroupInfoResponseInfo } from './SecurityCheckPolicyGroupInfoResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityCheckPolicyGroupResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<SecurityCheckPolicyGroupInfoResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListSecurityCheckPolicyGroupResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<SecurityCheckPolicyGroupInfoResponseInfo>): ListSecurityCheckPolicyGroupResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<SecurityCheckPolicyGroupInfoResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<SecurityCheckPolicyGroupInfoResponseInfo> | undefined {
        return this['data_list'];
    }
}