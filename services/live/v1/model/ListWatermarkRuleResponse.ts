import { WatermarkRule } from './WatermarkRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListWatermarkRuleResponse extends SdkResponse {
    public total?: number;
    private 'rules_infos'?: Array<WatermarkRule>;
    private 'X-request-id'?: string;
    public constructor() { 
        super();
    }
    public withTotal(total: number): ListWatermarkRuleResponse {
        this['total'] = total;
        return this;
    }
    public withRulesInfos(rulesInfos: Array<WatermarkRule>): ListWatermarkRuleResponse {
        this['rules_infos'] = rulesInfos;
        return this;
    }
    public set rulesInfos(rulesInfos: Array<WatermarkRule>  | undefined) {
        this['rules_infos'] = rulesInfos;
    }
    public get rulesInfos(): Array<WatermarkRule> | undefined {
        return this['rules_infos'];
    }
    public withXRequestId(xRequestId: string): ListWatermarkRuleResponse {
        this['X-request-id'] = xRequestId;
        return this;
    }
    public set xRequestId(xRequestId: string  | undefined) {
        this['X-request-id'] = xRequestId;
    }
    public get xRequestId(): string | undefined {
        return this['X-request-id'];
    }
}