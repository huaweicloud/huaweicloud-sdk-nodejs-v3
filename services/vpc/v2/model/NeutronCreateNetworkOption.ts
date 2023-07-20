

export class NeutronCreateNetworkOption {
    public name?: string;
    private 'admin_state_up'?: boolean;
    public shared?: boolean;
    private 'provider:network_type'?: string;
    private 'port_security_enabled'?: boolean;
    public constructor() { 
    }
    public withName(name: string): NeutronCreateNetworkOption {
        this['name'] = name;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): NeutronCreateNetworkOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withShared(shared: boolean): NeutronCreateNetworkOption {
        this['shared'] = shared;
        return this;
    }
    public withProviderNetworkType(providerNetworkType: string): NeutronCreateNetworkOption {
        this['provider:network_type'] = providerNetworkType;
        return this;
    }
    public set providerNetworkType(providerNetworkType: string  | undefined) {
        this['provider:network_type'] = providerNetworkType;
    }
    public get providerNetworkType(): string | undefined {
        return this['provider:network_type'];
    }
    public withPortSecurityEnabled(portSecurityEnabled: boolean): NeutronCreateNetworkOption {
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