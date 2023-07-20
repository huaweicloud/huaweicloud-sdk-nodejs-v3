

export class NeutronUpdateNetworkOption {
    public name?: string;
    private 'admin_state_up'?: boolean;
    private 'port_security_enabled'?: boolean;
    public constructor() { 
    }
    public withName(name: string): NeutronUpdateNetworkOption {
        this['name'] = name;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): NeutronUpdateNetworkOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withPortSecurityEnabled(portSecurityEnabled: boolean): NeutronUpdateNetworkOption {
        this['port_security_enabled'] = portSecurityEnabled;
        return this;
    }
    public set portSecurityEnabled(portSecurityEnabled: boolean  | undefined) {
        this['port_security_enabled'] = portSecurityEnabled;
    }
    public get portSecurityEnabled(): boolean | undefined {
        return this['port_security_enabled'];
    }
}