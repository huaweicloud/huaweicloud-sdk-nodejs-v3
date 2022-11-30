import { PageInfo } from './PageInfo';
import { SecurityPolicy } from './SecurityPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityPoliciesResponse extends SdkResponse {
    private 'security_policies'?: Array<SecurityPolicy> | undefined;
    private 'request_id'?: string | undefined;
    private 'page_info'?: PageInfo | undefined;
    public constructor() { 
        super();
    }
    public withSecurityPolicies(securityPolicies: Array<SecurityPolicy>): ListSecurityPoliciesResponse {
        this['security_policies'] = securityPolicies;
        return this;
    }
    public set securityPolicies(securityPolicies: Array<SecurityPolicy> | undefined) {
        this['security_policies'] = securityPolicies;
    }
    public get securityPolicies() {
        return this['security_policies'];
    }
    public withRequestId(requestId: string): ListSecurityPoliciesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListSecurityPoliciesResponse {
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