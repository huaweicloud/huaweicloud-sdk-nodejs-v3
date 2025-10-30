import { HostCheckRulesResponseInfo } from './HostCheckRulesResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHostCheckRulesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<HostCheckRulesResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListHostCheckRulesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<HostCheckRulesResponseInfo>): ListHostCheckRulesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<HostCheckRulesResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<HostCheckRulesResponseInfo> | undefined {
        return this['data_list'];
    }
}