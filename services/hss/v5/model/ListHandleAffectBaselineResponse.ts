import { HandleAffectBaselineInfo } from './HandleAffectBaselineInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListHandleAffectBaselineResponse extends SdkResponse {
    private 'total_rule_num'?: number;
    private 'rule_num'?: number;
    private 'host_num'?: number;
    private 'data_list'?: Array<HandleAffectBaselineInfo>;
    public constructor() { 
        super();
    }
    public withTotalRuleNum(totalRuleNum: number): ListHandleAffectBaselineResponse {
        this['total_rule_num'] = totalRuleNum;
        return this;
    }
    public set totalRuleNum(totalRuleNum: number  | undefined) {
        this['total_rule_num'] = totalRuleNum;
    }
    public get totalRuleNum(): number | undefined {
        return this['total_rule_num'];
    }
    public withRuleNum(ruleNum: number): ListHandleAffectBaselineResponse {
        this['rule_num'] = ruleNum;
        return this;
    }
    public set ruleNum(ruleNum: number  | undefined) {
        this['rule_num'] = ruleNum;
    }
    public get ruleNum(): number | undefined {
        return this['rule_num'];
    }
    public withHostNum(hostNum: number): ListHandleAffectBaselineResponse {
        this['host_num'] = hostNum;
        return this;
    }
    public set hostNum(hostNum: number  | undefined) {
        this['host_num'] = hostNum;
    }
    public get hostNum(): number | undefined {
        return this['host_num'];
    }
    public withDataList(dataList: Array<HandleAffectBaselineInfo>): ListHandleAffectBaselineResponse {
        this['data_list'] = dataList;
        return this;
    }
    public set dataList(dataList: Array<HandleAffectBaselineInfo>  | undefined) {
        this['data_list'] = dataList;
    }
    public get dataList(): Array<HandleAffectBaselineInfo> | undefined {
        return this['data_list'];
    }
}