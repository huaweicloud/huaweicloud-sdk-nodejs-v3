

export class VpcInfo {
    private 'vpc_id'?: string;
    private 'tenant_id'?: string;
    public constructor(vpcId?: string) { 
        this['vpc_id'] = vpcId;
    }
    public withVpcId(vpcId: string): VpcInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withTenantId(tenantId: string): VpcInfo {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
}