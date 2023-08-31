import { NatGatewaySnatRuleResponseBody } from './NatGatewaySnatRuleResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowNatGatewaySnatRuleResponse extends SdkResponse {
    private 'snat_rule'?: NatGatewaySnatRuleResponseBody;
    public constructor() { 
        super();
    }
    public withSnatRule(snatRule: NatGatewaySnatRuleResponseBody): ShowNatGatewaySnatRuleResponse {
        this['snat_rule'] = snatRule;
        return this;
    }
    public set snatRule(snatRule: NatGatewaySnatRuleResponseBody  | undefined) {
        this['snat_rule'] = snatRule;
    }
    public get snatRule(): NatGatewaySnatRuleResponseBody | undefined {
        return this['snat_rule'];
    }
}