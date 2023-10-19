import { SecurityGroupRule } from './SecurityGroupRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class BatchCreateSecurityGroupRulesResponse extends SdkResponse {
    private 'security_group_rules'?: Array<SecurityGroupRule>;
    private 'request_id'?: string;
    public constructor() { 
        super();
    }
    public withSecurityGroupRules(securityGroupRules: Array<SecurityGroupRule>): BatchCreateSecurityGroupRulesResponse {
        this['security_group_rules'] = securityGroupRules;
        return this;
    }
    public set securityGroupRules(securityGroupRules: Array<SecurityGroupRule>  | undefined) {
        this['security_group_rules'] = securityGroupRules;
    }
    public get securityGroupRules(): Array<SecurityGroupRule> | undefined {
        return this['security_group_rules'];
    }
    public withRequestId(requestId: string): BatchCreateSecurityGroupRulesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
}