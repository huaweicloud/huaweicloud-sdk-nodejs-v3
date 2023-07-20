import { NeutronSecurityGroupRule } from './NeutronSecurityGroupRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronCreateSecurityGroupRuleResponse extends SdkResponse {
    private 'security_group_rule'?: NeutronSecurityGroupRule;
    public constructor() { 
        super();
    }
    public withSecurityGroupRule(securityGroupRule: NeutronSecurityGroupRule): NeutronCreateSecurityGroupRuleResponse {
        this['security_group_rule'] = securityGroupRule;
        return this;
    }
    public set securityGroupRule(securityGroupRule: NeutronSecurityGroupRule  | undefined) {
        this['security_group_rule'] = securityGroupRule;
    }
    public get securityGroupRule(): NeutronSecurityGroupRule | undefined {
        return this['security_group_rule'];
    }
}