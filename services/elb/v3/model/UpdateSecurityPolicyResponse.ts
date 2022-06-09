import { SecurityPolicy } from './SecurityPolicy';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateSecurityPolicyResponse extends SdkResponse {
    private 'security_policy'?: SecurityPolicy | undefined;
    private 'request_id'?: string | undefined;
    public constructor() { 
        super();
    }
    public withSecurityPolicy(securityPolicy: SecurityPolicy): UpdateSecurityPolicyResponse {
        this['security_policy'] = securityPolicy;
        return this;
    }
    public set securityPolicy(securityPolicy: SecurityPolicy | undefined) {
        this['security_policy'] = securityPolicy;
    }
    public get securityPolicy() {
        return this['security_policy'];
    }
    public withRequestId(requestId: string): UpdateSecurityPolicyResponse {
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