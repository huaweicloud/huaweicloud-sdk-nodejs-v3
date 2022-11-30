

export class ClusterInformationSpecHostNetwork {
    private 'SecurityGroup'?: string | undefined;
    public constructor() { 
    }
    public withSecurityGroup(securityGroup: string): ClusterInformationSpecHostNetwork {
        this['SecurityGroup'] = securityGroup;
        return this;
    }
    public set securityGroup(securityGroup: string | undefined) {
        this['SecurityGroup'] = securityGroup;
    }
    public get securityGroup() {
        return this['SecurityGroup'];
    }
}