import { AclPolicyOption } from './AclPolicyOption';


export class UpdateDomainConsoleAclPolicyRequestBody {
    private 'console_acl_policy': AclPolicyOption | undefined;
    public constructor(consoleAclPolicy: any) { 
        this['console_acl_policy'] = consoleAclPolicy;
    }
    public withConsoleAclPolicy(consoleAclPolicy: AclPolicyOption): UpdateDomainConsoleAclPolicyRequestBody {
        this['console_acl_policy'] = consoleAclPolicy;
        return this;
    }
    public set consoleAclPolicy(consoleAclPolicy: AclPolicyOption | undefined) {
        this['console_acl_policy'] = consoleAclPolicy;
    }
    public get consoleAclPolicy() {
        return this['console_acl_policy'];
    }
}