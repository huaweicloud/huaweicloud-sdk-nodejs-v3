import { NeutronSecurityGroupRule } from './NeutronSecurityGroupRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronListSecurityGroupRulesResponse extends SdkResponse {
    private 'security_group_rules'?: Array<NeutronSecurityGroupRule> | undefined;
    public constructor() { 
        super();
    }
    public withSecurityGroupRules(securityGroupRules: Array<NeutronSecurityGroupRule>): NeutronListSecurityGroupRulesResponse {
        this['security_group_rules'] = securityGroupRules;
        return this;
    }
    public set securityGroupRules(securityGroupRules: Array<NeutronSecurityGroupRule> | undefined) {
        this['security_group_rules'] = securityGroupRules;
    }
    public get securityGroupRules() {
        return this['security_group_rules'];
    }
}