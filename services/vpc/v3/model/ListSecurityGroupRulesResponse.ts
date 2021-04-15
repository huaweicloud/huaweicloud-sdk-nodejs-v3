import { PageInfo } from './PageInfo';
import { SecurityGroupRule } from './SecurityGroupRule';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityGroupRulesResponse extends SdkResponse {
    private 'request_id'?: string | undefined;
    private 'security_group_rules'?: Array<SecurityGroupRule> | undefined;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withRequestId(requestId: string): ListSecurityGroupRulesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
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
    public withPageInfo(pageInfo: PageInfo): ListSecurityGroupRulesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo() {
        return this['page_info'];
    }
}