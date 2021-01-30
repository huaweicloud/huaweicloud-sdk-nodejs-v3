import { AclPolicyResult } from './AclPolicyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class UpdateDomainApiAclPolicyResponse extends SdkResponse {
    private 'api_acl_policy'?: AclPolicyResult | undefined;
    public constructor() { 
        super();
    }
    public withApiAclPolicy(apiAclPolicy: AclPolicyResult): UpdateDomainApiAclPolicyResponse {
        this['api_acl_policy'] = apiAclPolicy;
        return this;
    }
    public set apiAclPolicy(apiAclPolicy: AclPolicyResult | undefined) {
        this['api_acl_policy'] = apiAclPolicy;
    }
    public get apiAclPolicy() {
        return this['api_acl_policy'];
    }
}