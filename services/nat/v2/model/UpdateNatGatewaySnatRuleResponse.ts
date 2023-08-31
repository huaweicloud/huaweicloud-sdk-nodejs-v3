import { NatGatewayUpdateSnatRuleResponseBody } from './NatGatewayUpdateSnatRuleResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateNatGatewaySnatRuleResponse extends SdkResponse {
    private 'snat_rule'?: NatGatewayUpdateSnatRuleResponseBody;
    public constructor() { 
        super();
    }
    public withSnatRule(snatRule: NatGatewayUpdateSnatRuleResponseBody): UpdateNatGatewaySnatRuleResponse {
        this['snat_rule'] = snatRule;
        return this;
    }
    public set snatRule(snatRule: NatGatewayUpdateSnatRuleResponseBody  | undefined) {
        this['snat_rule'] = snatRule;
    }
    public get snatRule(): NatGatewayUpdateSnatRuleResponseBody | undefined {
        return this['snat_rule'];
    }
}