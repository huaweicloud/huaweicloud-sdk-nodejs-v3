

export class MemberResp {
    public id?: string;
    private 'project_id'?: string;
    private 'tenant_id'?: string;
    public name?: string;
    private 'admin_state_up'?: boolean;
    private 'protocol_port'?: number;
    private 'subnet_id'?: string;
    public address?: string;
    public weight?: number;
    private 'operating_status'?: string;
    public constructor(id?: string, projectId?: string, tenantId?: string, name?: string, adminStateUp?: boolean, protocolPort?: number, subnetId?: string, address?: string, weight?: number, operatingStatus?: string) { 
        this['id'] = id;
        this['project_id'] = projectId;
        this['tenant_id'] = tenantId;
        this['name'] = name;
        this['admin_state_up'] = adminStateUp;
        this['protocol_port'] = protocolPort;
        this['subnet_id'] = subnetId;
        this['address'] = address;
        this['weight'] = weight;
        this['operating_status'] = operatingStatus;
    }
    public withId(id: string): MemberResp {
        this['id'] = id;
        return this;
    }
    public withProjectId(projectId: string): MemberResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withTenantId(tenantId: string): MemberResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): MemberResp {
        this['name'] = name;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): MemberResp {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withProtocolPort(protocolPort: number): MemberResp {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
    public withSubnetId(subnetId: string): MemberResp {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withAddress(address: string): MemberResp {
        this['address'] = address;
        return this;
    }
    public withWeight(weight: number): MemberResp {
        this['weight'] = weight;
        return this;
    }
    public withOperatingStatus(operatingStatus: string): MemberResp {
        this['operating_status'] = operatingStatus;
        return this;
    }
    public set operatingStatus(operatingStatus: string  | undefined) {
        this['operating_status'] = operatingStatus;
    }
    public get operatingStatus(): string | undefined {
        return this['operating_status'];
    }
}