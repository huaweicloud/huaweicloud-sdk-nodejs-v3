import { AclPolicyOption } from './AclPolicyOption';


export class UpdateDomainApiAclPolicyRequestBody {
    private 'api_acl_policy'?: AclPolicyOption;
    public constructor(apiAclPolicy?: AclPolicyOption) { 
        this['api_acl_policy'] = apiAclPolicy;
    }
    public withApiAclPolicy(apiAclPolicy: AclPolicyOption): UpdateDomainApiAclPolicyRequestBody {
        this['api_acl_policy'] = apiAclPolicy;
        return this;
    }
    public set apiAclPolicy(apiAclPolicy: AclPolicyOption  | undefined) {
        this['api_acl_policy'] = apiAclPolicy;
    }
    public get apiAclPolicy(): AclPolicyOption | undefined {
        return this['api_acl_policy'];
    }
}