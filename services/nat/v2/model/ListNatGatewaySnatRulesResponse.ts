import { NatGatewaySnatRuleResponseBody } from './NatGatewaySnatRuleResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListNatGatewaySnatRulesResponse extends SdkResponse {
    private 'snat_rules'?: Array<NatGatewaySnatRuleResponseBody>;
    public constructor() { 
        super();
    }
    public withSnatRules(snatRules: Array<NatGatewaySnatRuleResponseBody>): ListNatGatewaySnatRulesResponse {
        this['snat_rules'] = snatRules;
        return this;
    }
    public set snatRules(snatRules: Array<NatGatewaySnatRuleResponseBody>  | undefined) {
        this['snat_rules'] = snatRules;
    }
    public get snatRules(): Array<NatGatewaySnatRuleResponseBody> | undefined {
        return this['snat_rules'];
    }
}