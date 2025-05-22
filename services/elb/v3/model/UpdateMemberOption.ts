

export class UpdateMemberOption {
    private 'admin_state_up'?: boolean;
    private 'availability_zone'?: string;
    public name?: string;
    public weight?: number;
    private 'protocol_port'?: number;
    public constructor() { 
    }
    public withAdminStateUp(adminStateUp: boolean): UpdateMemberOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withAvailabilityZone(availabilityZone: string): UpdateMemberOption {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withName(name: string): UpdateMemberOption {
        this['name'] = name;
        return this;
    }
    public withWeight(weight: number): UpdateMemberOption {
        this['weight'] = weight;
        return this;
    }
    public withProtocolPort(protocolPort: number): UpdateMemberOption {
        this['protocol_port'] = protocolPort;
        return this;
    }
    public set protocolPort(protocolPort: number  | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort(): number | undefined {
        return this['protocol_port'];
    }
}