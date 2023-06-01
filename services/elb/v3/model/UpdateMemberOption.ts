

export class UpdateMemberOption {
    private 'admin_state_up'?: boolean | undefined;
    public name?: string;
    public weight?: number;
    private 'protocol_port'?: number | undefined;
    public constructor() { 
    }
    public withAdminStateUp(adminStateUp: boolean): UpdateMemberOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
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
    public set protocolPort(protocolPort: number | undefined) {
        this['protocol_port'] = protocolPort;
    }
    public get protocolPort() {
        return this['protocol_port'];
    }
}