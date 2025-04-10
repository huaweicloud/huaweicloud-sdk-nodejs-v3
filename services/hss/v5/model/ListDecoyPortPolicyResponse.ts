import { PolicyListDataList } from './PolicyListDataList';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListDecoyPortPolicyResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<PolicyListDataList>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListDecoyPortPolicyResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<PolicyListDataList>): ListDecoyPortPolicyResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<PolicyListDataList>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<PolicyListDataList> | undefined {
        return this['data_list'];
    }
}