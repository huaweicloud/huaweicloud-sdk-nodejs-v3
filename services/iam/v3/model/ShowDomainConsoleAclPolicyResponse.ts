import { AclPolicyResult } from './AclPolicyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainConsoleAclPolicyResponse extends SdkResponse {
    private 'console_acl_policy'?: AclPolicyResult | undefined;
    public constructor() { 
        super();
    }
    public withConsoleAclPolicy(consoleAclPolicy: AclPolicyResult): ShowDomainConsoleAclPolicyResponse {
        this['console_acl_policy'] = consoleAclPolicy;
        return this;
    }
    public set consoleAclPolicy(consoleAclPolicy: AclPolicyResult | undefined) {
        this['console_acl_policy'] = consoleAclPolicy;
    }
    public get consoleAclPolicy() {
        return this['console_acl_policy'];
    }
}