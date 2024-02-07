

export class VpcIgwsTenantResp {
    public id?: string;
    private 'project_id'?: string;
    private 'vpc_id'?: string;
    public name?: string;
    private 'created_at'?: string;
    private 'updated_at'?: string;
    private 'network_id'?: string;
    private 'enable_ipv6'?: boolean;
    public constructor() { 
    }
    public withId(id: string): VpcIgwsTenantResp {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): VpcIgwsTenantResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withVpcId(vpcId: string): VpcIgwsTenantResp {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withName(name: string): VpcIgwsTenantResp {
        this['name'] = name;
        return this;
    }
    public withCreatedAt(createdAt: string): VpcIgwsTenantResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: string): VpcIgwsTenantResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: string  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): string | undefined {
        return this['updated_at'];
    }
    public withNetworkId(networkId: string): VpcIgwsTenantResp {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string  | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId(): string | undefined {
        return this['network_id'];
    }
    public withEnableIpv6(enableIpv6: boolean): VpcIgwsTenantResp {
        this['enable_ipv6'] = enableIpv6;
        return this;
    }
    public set enableIpv6(enableIpv6: boolean  | undefined) {
        this['enable_ipv6'] = enableIpv6;
    }
    public get enableIpv6(): boolean | undefined {
        return this['enable_ipv6'];
    }
}