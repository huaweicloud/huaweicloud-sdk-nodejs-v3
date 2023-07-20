

export class UpdateSubNetworkInterfaceOption {
    public description?: string;
    private 'security_groups'?: Array<string>;
    public constructor() { 
    }
    public withDescription(description: string): UpdateSubNetworkInterfaceOption {
        this['description'] = description;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<string>): UpdateSubNetworkInterfaceOption {
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