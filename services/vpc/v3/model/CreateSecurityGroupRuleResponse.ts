import { SecurityGroupRule } from './SecurityGroupRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class CreateSecurityGroupRuleResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'security_group_rule'?: SecurityGroupRule | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): CreateSecurityGroupRuleResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withSecurityGroupRule(securityGroupRule: SecurityGroupRule): CreateSecurityGroupRuleResponse {
        this['security_group_rule'] = securityGroupRule;
        return this;
    }
    public set securityGroupRule(securityGroupRule: SecurityGroupRule | undefined) {
        this['security_group_rule'] = securityGroupRule;
    }
    public get securityGroupRule() {
        return this['security_group_rule'];
    }
}