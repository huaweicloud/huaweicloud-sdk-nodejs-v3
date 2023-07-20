import { SecurityGroupRule } from './SecurityGroupRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSecurityGroupRuleResponse extends SdkResponse {
    private 'security_group_rule'?: SecurityGroupRule;
    public constructor() { 
        super();
    }
    public withSecurityGroupRule(securityGroupRule: SecurityGroupRule): CreateSecurityGroupRuleResponse {
        this['security_group_rule'] = securityGroupRule;
        return this;
    }
    public set securityGroupRule(securityGroupRule: SecurityGroupRule  | undefined) {
        this['security_group_rule'] = securityGroupRule;
    }
    public get securityGroupRule(): SecurityGroupRule | undefined {
        return this['security_group_rule'];
    }
}