import { MemberCheckJobResultGroup } from './MemberCheckJobResultGroup';


export class MemberCheckJobResult {
    public config?: MemberCheckJobResultGroup;
    public acl?: MemberCheckJobResultGroup;
    private 'security_group'?: MemberCheckJobResultGroup;
    public constructor() { 
    }
    public withConfig(config: MemberCheckJobResultGroup): MemberCheckJobResult {
        this['config'] = config;
        return this;
    }
    public withAcl(acl: MemberCheckJobResultGroup): MemberCheckJobResult {
        this['acl'] = acl;
        return this;
    }
    public withSecurityGroup(securityGroup: MemberCheckJobResultGroup): MemberCheckJobResult {
        this['security_group'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: MemberCheckJobResultGroup  | undefined) {
        this['security_group'] = securityGroup;
    }
    public get securityGroup(): MemberCheckJobResultGroup | undefined {
        return this['security_group'];
    }
}