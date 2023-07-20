

export class CreateMemberOption {
    public address?: string;
    private 'admin_state_up'?: boolean;
    public name?: string;
    private 'project_id'?: string;
    private 'protocol_port'?: number;
    private 'subnet_cidr_id'?: string;
    public weight?: number;
    public constructor(address?: string) { 
        this['address'] = address;
    }
    public withAddress(address: string): CreateMemberOption {
        this['address'] = address;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): CreateMemberOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withName(name: string): CreateMemberOption {
        this['name'] = name;
        return this;
    }
    public withProjectId(projectId: string): CreateMemberOption {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withProtocolPort(protocolPort: number): CreateMemberOption {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
    public withSubnetCidrId(subnetCidrId: string): CreateMemberOption {
        this['subnet_cidr_id'] = subnetCidrId;
        return this;
    }
    public set subnetCidrId(subnetCidrId: string  | undefined) {
        this['subnet_cidr_id'] = subnetCidrId;
    }
    public get subnetCidrId(): string | undefined {
        return this['subnet_cidr_id'];
    }
    public withWeight(weight: number): CreateMemberOption {
        this['weight'] = weight;
        return this;
    }
}