import { AclPolicyResult } from './AclPolicyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainApiAclPolicyResponse extends SdkResponse {
    private 'api_acl_policy'?: AclPolicyResult;
    public constructor() { 
        super();
    }
    public withApiAclPolicy(apiAclPolicy: AclPolicyResult): ShowDomainApiAclPolicyResponse {
        this['api_acl_policy'] = apiAclPolicy;
        return this;
    }
    public set apiAclPolicy(apiAclPolicy: AclPolicyResult  | undefined) {
        this['api_acl_policy'] = apiAclPolicy;
    }
    public get apiAclPolicy(): AclPolicyResult | undefined {
        return this['api_acl_policy'];
    }
}