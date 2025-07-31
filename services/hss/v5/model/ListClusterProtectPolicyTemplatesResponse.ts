import { PolicyTemplateInfo } from './PolicyTemplateInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListClusterProtectPolicyTemplatesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<PolicyTemplateInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListClusterProtectPolicyTemplatesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<PolicyTemplateInfo>): ListClusterProtectPolicyTemplatesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<PolicyTemplateInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<PolicyTemplateInfo> | undefined {
        return this['data_list'];
    }
}