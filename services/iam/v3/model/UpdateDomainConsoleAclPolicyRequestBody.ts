import { ConsoleAclPolicyOption } from './ConsoleAclPolicyOption';


export class UpdateDomainConsoleAclPolicyRequestBody {
    private 'console_acl_policy'?: ConsoleAclPolicyOption;
    public constructor(consoleAclPolicy?: ConsoleAclPolicyOption) { 
        this['console_acl_policy'] = consoleAclPolicy;
    }
    public withConsoleAclPolicy(consoleAclPolicy: ConsoleAclPolicyOption): UpdateDomainConsoleAclPolicyRequestBody {
        this['console_acl_policy'] = consoleAclPolicy;
        return this;
    }
    public set consoleAclPolicy(consoleAclPolicy: ConsoleAclPolicyOption  | undefined) {
        this['console_acl_policy'] = consoleAclPolicy;
    }
    public get consoleAclPolicy(): ConsoleAclPolicyOption | undefined {
        return this['console_acl_policy'];
    }
}