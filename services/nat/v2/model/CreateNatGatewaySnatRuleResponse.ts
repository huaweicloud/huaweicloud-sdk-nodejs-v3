import { CreateNatGatewaySnatRuleResponseBody } from './CreateNatGatewaySnatRuleResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateNatGatewaySnatRuleResponse extends SdkResponse {
    private 'snat_rule'?: CreateNatGatewaySnatRuleResponseBody;
    public constructor() { 
        super();
    }
    public withSnatRule(snatRule: CreateNatGatewaySnatRuleResponseBody): CreateNatGatewaySnatRuleResponse {
        this['snat_rule'] = snatRule;
        return this;
    }
    public set snatRule(snatRule: CreateNatGatewaySnatRuleResponseBody  | undefined) {
        this['snat_rule'] = snatRule;
    }
    public get snatRule(): CreateNatGatewaySnatRuleResponseBody | undefined {
        return this['snat_rule'];
    }
}