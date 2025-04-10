import { ConsoleAclPolicyResult } from './ConsoleAclPolicyResult';

import { SdkResponse } from "@huaweicloud/huaweicloud-sdk-core/SdkResponse";

export class ShowDomainConsoleAclPolicyResponse extends SdkResponse {
    private 'console_acl_policy'?: ConsoleAclPolicyResult;
    public constructor() { 
        super();
    }
    public withConsoleAclPolicy(consoleAclPolicy: ConsoleAclPolicyResult): ShowDomainConsoleAclPolicyResponse {
        this['console_acl_policy'] = consoleAclPolicy;
        return this;
    }
    public set consoleAclPolicy(consoleAclPolicy: ConsoleAclPolicyResult  | undefined) {
        this['console_acl_policy'] = consoleAclPolicy;
    }
    public get consoleAclPolicy(): ConsoleAclPolicyResult | undefined {
        return this['console_acl_policy'];
    }
}