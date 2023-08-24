import { CheckRuleRiskInfoResponseInfo } from './CheckRuleRiskInfoResponseInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListRiskConfigCheckRulesResponse extends SdkResponse {
    private 'total_num'?: number;
    private 'data_list'?: Array<CheckRuleRiskInfoResponseInfo>;
    public constructor() { 
        super();
    }
    public withTotalNum(totalNum: number): ListRiskConfigCheckRulesResponse {
        this['total_num'] = totalNum;
        return this;
    }
    public set totalNum(totalNum: number  | undefined) {
        this['total_num'] = totalNum;
    }
    public get totalNum(): number | undefined {
        return this['total_num'];
    }
    public withDataList(dataList: Array<CheckRuleRiskInfoResponseInfo>): ListRiskConfigCheckRulesResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<CheckRuleRiskInfoResponseInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<CheckRuleRiskInfoResponseInfo> | undefined {
        return this['data_list'];
    }
}