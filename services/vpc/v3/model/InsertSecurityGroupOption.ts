

export class InsertSecurityGroupOption {
    private 'security_groups'?: Array<string>;
    public index?: number;
    public constructor(securityGroups?: Array<string>) { 
        this['security_groups'] = securityGroups;
    }
    public withSecurityGroups(securityGroups: Array<string>): InsertSecurityGroupOption {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<string> | undefined {
        return this['security_groups'];
    }
    public withIndex(index: number): InsertSecurityGroupOption {
        this['index'] = index;
        return this;
    }
}