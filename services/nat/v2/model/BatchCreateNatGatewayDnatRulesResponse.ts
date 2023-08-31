import { NatGatewayDnatRuleResponseBody } from './NatGatewayDnatRuleResponseBody';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateNatGatewayDnatRulesResponse extends SdkResponse {
    private 'dnat_rules'?: Array<NatGatewayDnatRuleResponseBody>;
    public constructor() { 
        super();
    }
    public withDnatRules(dnatRules: Array<NatGatewayDnatRuleResponseBody>): BatchCreateNatGatewayDnatRulesResponse {
        this['dnat_rules'] = dnatRules;
        return this;
    }
    public set dnatRules(dnatRules: Array<NatGatewayDnatRuleResponseBody>  | undefined) {
        this['dnat_rules'] = dnatRules;
    }
    public get dnatRules(): Array<NatGatewayDnatRuleResponseBody> | undefined {
        return this['dnat_rules'];
    }
}