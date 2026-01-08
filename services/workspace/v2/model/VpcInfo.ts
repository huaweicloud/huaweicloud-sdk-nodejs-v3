

export class VpcInfo {
    public status?: string;
    public id?: string;
    public name?: string;
    private 'created_at'?: string;
    public cidr?: string;
    private 'tenant_id'?: string;
    public constructor() { 
    }
    public withStatus(status: string): VpcInfo {
        this['status'] = status;
        return this;
    }
    public withId(id: string): VpcInfo {
        this['id'] = id;
        return this;
    }
    public withName(name: string): VpcInfo {
        this['name'] = name;
        return this;
    }
    public withCreatedAt(createdAt: string): VpcInfo {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: string  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): string | undefined {
        return this['created_at'];
    }
    public withCidr(cidr: string): VpcInfo {
        this['cidr'] = cidr;
        return this;
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