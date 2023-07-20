

export class NeutronListNetworksRequest {
    public limit?: number;
    public marker?: string;
    public id?: string;
    public name?: string;
    public status?: string;
    public shared?: boolean;
    private 'router:external'?: boolean;
    private 'admin_state_up'?: boolean;
    private 'provider:network_type'?: string;
    private 'tenant_id'?: string;
    public constructor() { 
    }
    public withLimit(limit: number): NeutronListNetworksRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): NeutronListNetworksRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: string): NeutronListNetworksRequest {
        this['id'] = id;
        return this;
    }
    public withName(name: string): NeutronListNetworksRequest {
        this['name'] = name;
        return this;
    }
    public withStatus(status: string): NeutronListNetworksRequest {
        this['status'] = status;
        return this;
    }
    public withShared(shared: boolean): NeutronListNetworksRequest {
        this['shared'] = shared;
        return this;
    }
    public withRouterExternal(routerExternal: boolean): NeutronListNetworksRequest {
        this['router:external'] = routerExternal;
        return this;
    }
    public set routerExternal(routerExternal: boolean  | undefined) {
        this['router:external'] = routerExternal;
    }
    public get routerExternal(): boolean | undefined {
        return this['router:external'];
    }
    public withAdminStateUp(adminStateUp: boolean): NeutronListNetworksRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withProviderNetworkType(providerNetworkType: string): NeutronListNetworksRequest {
        this['provider:network_type'] = providerNetworkType;
        return this;
    }
    public set providerNetworkType(providerNetworkType: string  | undefined) {
        this['provider:network_type'] = providerNetworkType;
    }
    public get providerNetworkType(): string | undefined {
        return this['provider:network_type'];
    }
    public withTenantId(tenantId: string): NeutronListNetworksRequest {
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