

export class TicsAgentNatCommonInfo {
    private 'nat_id'?: string;
    private 'project_id'?: string;
    private 'subnet_id'?: string;
    private 'vpc_id'?: string;
    public constructor() { 
    }
    public withNatId(natId: string): TicsAgentNatCommonInfo {
        this['nat_id'] = natId;
        return this;
    }
    public set natId(natId: string  | undefined) {
        this['nat_id'] = natId;
    }
    public get natId(): string | undefined {
        return this['nat_id'];
    }
    public withProjectId(projectId: string): TicsAgentNatCommonInfo {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSubnetId(subnetId: string): TicsAgentNatCommonInfo {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withVpcId(vpcId: string): TicsAgentNatCommonInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
}