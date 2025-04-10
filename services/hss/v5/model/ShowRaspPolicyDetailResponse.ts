import { CheckFeatureRuleInfo } from './CheckFeatureRuleInfo';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowRaspPolicyDetailResponse extends SdkResponse {
    private 'policy_name'?: string;
    private 'os_type'?: string;
    private 'rule_list'?: Array<CheckFeatureRuleInfo>;
    public constructor() { 
        super();
    }
    public withPolicyName(policyName: string): ShowRaspPolicyDetailResponse {
        this['policy_name'] = policyName;
        return this;
    }
    public set policyName(policyName: string  | undefined) {
        this['policy_name'] = policyName;
    }
    public get policyName(): string | undefined {
        return this['policy_name'];
    }
    public withOsType(osType: string): ShowRaspPolicyDetailResponse {
        this['os_type'] = osType;
        return this;
    }
    public set osType(osType: string  | undefined) {
        this['os_type'] = osType;
    }
    public get osType(): string | undefined {
        return this['os_type'];
    }
    public withRuleList(ruleList: Array<CheckFeatureRuleInfo>): ShowRaspPolicyDetailResponse {
        this['rule_list'] = ruleList;
        return this;
    }
    public set ruleList(ruleList: Array<CheckFeatureRuleInfo>  | undefined) {
        this['rule_list'] = ruleList;
    }
    public get ruleList(): Array<CheckFeatureRuleInfo> | undefined {
        return this['rule_list'];
    }
}