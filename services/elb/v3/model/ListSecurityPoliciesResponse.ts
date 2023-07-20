import { PageInfo } from './PageInfo';
import { SecurityPolicy } from './SecurityPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSecurityPoliciesResponse extends SdkResponse {
    private 'security_policies'?: Array<SecurityPolicy>;
    private 'request_id'?: string;
    private 'page_info'?: PageInfo;
    public constructor() { 
        super();
    }
    public withSecurityPolicies(securityPolicies: Array<SecurityPolicy>): ListSecurityPoliciesResponse {
        this['security_policies'] = securityPolicies;
        return this;
    }
    public set securityPolicies(securityPolicies: Array<SecurityPolicy>  | undefined) {
        this['security_policies'] = securityPolicies;
    }
    public get securityPolicies(): Array<SecurityPolicy> | undefined {
        return this['security_policies'];
    }
    public withRequestId(requestId: string): ListSecurityPoliciesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string  | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId(): string | undefined {
        return this['request_id'];
    }
    public withPageInfo(pageInfo: PageInfo): ListSecurityPoliciesResponse {
        this['page_info'] = pageInfo;
        return this;
    }
    public set pageInfo(pageInfo: PageInfo  | undefined) {
        this['page_info'] = pageInfo;
    }
    public get pageInfo(): PageInfo | undefined {
        return this['page_info'];
    }
}