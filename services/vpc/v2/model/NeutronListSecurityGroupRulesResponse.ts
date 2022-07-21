import { NeutronPageLink } from './NeutronPageLink';
import { NeutronSecurityGroupRule } from './NeutronSecurityGroupRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class NeutronListSecurityGroupRulesResponse extends SdkResponse {
    private 'security_group_rules'?: Array<NeutronSecurityGroupRule> | undefined;
    private 'security_group_rules_links'?: Array<NeutronPageLink> | undefined;
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
    public withSecurityGroupRulesLinks(securityGroupRulesLinks: Array<NeutronPageLink>): NeutronListSecurityGroupRulesResponse {
        this['security_group_rules_links'] = securityGroupRulesLinks;
        return this;
    }
    public set securityGroupRulesLinks(securityGroupRulesLinks: Array<NeutronPageLink> | undefined) {
        this['security_group_rules_links'] = securityGroupRulesLinks;
    }
    public get securityGroupRulesLinks() {
        return this['security_group_rules_links'];
    }
}