

export class BatchUpdateMembersOption {
    public id?: string;
    private 'availability_zone'?: string;
    private 'admin_state_up'?: boolean;
    public name?: string;
    private 'protocol_port'?: number;
    public weight?: number;
    public constructor(id?: string) { 
        this['id'] = id;
    }
    public withId(id: string): BatchUpdateMembersOption {
        this['id'] = id;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): BatchUpdateMembersOption {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withAdminStateUp(adminStateUp: boolean): BatchUpdateMembersOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withName(name: string): BatchUpdateMembersOption {
        this['name'] = name;
        return this;
    }
    public withProtocolPort(protocolPort: number): BatchUpdateMembersOption {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
    public withWeight(weight: number): BatchUpdateMembersOption {
        this['weight'] = weight;
        return this;
    }
}