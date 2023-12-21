

export class ChangeInstanceSecurityGroups {
    private 'security_groups'?: Array<string>;
    public constructor(securityGroups?: Array<string>) { 
        this['security_groups'] = securityGroups;
    }
    public withSecurityGroups(securityGroups: Array<string>): ChangeInstanceSecurityGroups {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<string> | undefined {
        return this['security_groups'];
    }
}