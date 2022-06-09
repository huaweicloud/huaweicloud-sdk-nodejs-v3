import { SystemSecurityPolicy } from './SystemSecurityPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ListSystemSecurityPoliciesResponse extends SdkResponse {
    private 'system_security_policies'?: Array<SystemSecurityPolicy> | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withSystemSecurityPolicies(systemSecurityPolicies: Array<SystemSecurityPolicy>): ListSystemSecurityPoliciesResponse {
        this['system_security_policies'] = systemSecurityPolicies;
        return this;
    }
    public set systemSecurityPolicies(systemSecurityPolicies: Array<SystemSecurityPolicy> | undefined) {
        this['system_security_policies'] = systemSecurityPolicies;
    }
    public get systemSecurityPolicies() {
        return this['system_security_policies'];
    }
    public withRequestId(requestId: string): ListSystemSecurityPoliciesResponse {
        this['request_id'] = requestId;
        return this;
    }
    public set requestId(requestId: string | undefined) {
        this['request_id'] = requestId;
    }
    public get requestId() {
        return this['request_id'];
    }
}