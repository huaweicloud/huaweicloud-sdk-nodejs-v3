

export class CreateMemberReq {
    private 'tenant_id'?: string;
    public name?: string;
    private 'admin_state_up'?: boolean;
    private 'protocol_port'?: number;
    private 'subnet_id'?: string;
    public address?: string;
    public weight?: number;
    public constructor(protocolPort?: number, subnetId?: string, address?: string) { 
        this['protocol_port'] = protocolPort;
        this['subnet_id'] = subnetId;
        this['address'] = address;
    }
    public withTenantId(tenantId: string): CreateMemberReq {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): CreateMemberReq {
        this['name'] = name;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): CreateMemberReq {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withProtocolPort(protocolPort: number): CreateMemberReq {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
    public withSubnetId(subnetId: string): CreateMemberReq {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withAddress(address: string): CreateMemberReq {
        this['address'] = address;
        return this;
    }
    public withWeight(weight: number): CreateMemberReq {
        this['weight'] = weight;
        return this;
    }
}