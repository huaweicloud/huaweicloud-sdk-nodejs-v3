

export class ClusterInformationSpecHostNetwork {
    private 'SecurityGroup'?: string;
    public constructor() { 
    }
    public withSecurityGroup(securityGroup: string): ClusterInformationSpecHostNetwork {
        this['SecurityGroup'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: string  | undefined) {
        this['SecurityGroup'] = securityGroup;
    }
    public get securityGroup(): string | undefined {
        return this['SecurityGroup'];
    }
}