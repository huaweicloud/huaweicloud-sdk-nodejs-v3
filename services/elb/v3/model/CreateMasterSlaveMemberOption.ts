

export class CreateMasterSlaveMemberOption {
    public address: string;
    private 'admin_state_up'?: boolean | undefined;
    public name?: string;
    private 'protocol_port': number | undefined;
    private 'subnet_cidr_id'?: string | undefined;
    public role: CreateMasterSlaveMemberOptionRoleEnum;
    public constructor(address?: any, protocolPort?: any, role?: any) { 
        this['address'] = address;
        this['protocol_port'] = protocolPort;
        this['role'] = role;
    }
    public withAddress(address: string): CreateMasterSlaveMemberOption {
        this['address'] = address;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): CreateMasterSlaveMemberOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withName(name: string): CreateMasterSlaveMemberOption {
        this['name'] = name;
        return this;
    }
    public withProtocolPort(protocolPort: number): CreateMasterSlaveMemberOption {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort() {
        return this['protocol_port'];
    }
    public withSubnetCidrId(subnetCidrId: string): CreateMasterSlaveMemberOption {
        this['subnet_cidr_id'] = subnetCidrId;
        return this;
    }
    public set subnetCidrId(subnetCidrId: string | undefined) {
        this['subnet_cidr_id'] = subnetCidrId;
    }
    public get subnetCidrId() {
        return this['subnet_cidr_id'];
    }
    public withRole(role: CreateMasterSlaveMemberOptionRoleEnum): CreateMasterSlaveMemberOption {
        this['role'] = role;
        return this;
    }
}

/**
    * @export
    * @enum {string}
    */
export enum CreateMasterSlaveMemberOptionRoleEnum {
    MASTER = 'master',
    SLAVE = 'slave'
}
