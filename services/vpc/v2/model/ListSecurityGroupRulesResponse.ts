import { SecurityGroupRule } from './SecurityGroupRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityGroupRulesResponse extends SdkResponse {
    private 'security_group_rules'?: Array<SecurityGroupRule> | undefined;
    public constructor() { 
        super();
    }
    public withSecurityGroupRules(securityGroupRules: Array<SecurityGroupRule>): ListSecurityGroupRulesResponse {
        this['security_group_rules'] = securityGroupRules;
        return this;
    }
    public set securityGroupRules(securityGroupRules: Array<SecurityGroupRule> | undefined) {
        this['security_group_rules'] = securityGroupRules;
    }
    public get securityGroupRules() {
        return this['security_group_rules'];
    }
}