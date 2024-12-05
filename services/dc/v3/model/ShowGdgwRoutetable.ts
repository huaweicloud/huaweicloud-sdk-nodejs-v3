

export class ShowGdgwRoutetable {
    public id?: string;
    private 'tenant_id'?: string;
    private 'gateway_id'?: string;
    public destination?: string;
    public nexthop?: string;
    public type?: string;
    private 'obtain_mode'?: string;
    public status?: string;
    private 'address_family'?: string;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): ShowGdgwRoutetable {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): ShowGdgwRoutetable {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withGatewayId(gatewayId: string): ShowGdgwRoutetable {
        this['gateway_id'] = gatewayId;
        return this;
    }
    public set gatewayId(gatewayId: string  | undefined) {
        this['gateway_id'] = gatewayId;
    }
    public get gatewayId(): string | undefined {
        return this['gateway_id'];
    }
    public withDestination(destination: string): ShowGdgwRoutetable {
        this['destination'] = destination;
        return this;
    }
    public withNexthop(nexthop: string): ShowGdgwRoutetable {
        this['nexthop'] = nexthop;
        return this;
    }
    public withType(type: string): ShowGdgwRoutetable {
        this['type'] = type;
        return this;
    }
    public withObtainMode(obtainMode: string): ShowGdgwRoutetable {
        this['obtain_mode'] = obtainMode;
        return this;
    }
    public set obtainMode(obtainMode: string  | undefined) {
        this['obtain_mode'] = obtainMode;
    }
    public get obtainMode(): string | undefined {
        return this['obtain_mode'];
    }
    public withStatus(status: string): ShowGdgwRoutetable {
        this['status'] = status;
        return this;
    }
    public withAddressFamily(addressFamily: string): ShowGdgwRoutetable {
        this['address_family'] = addressFamily;
        return this;
    }
    public set addressFamily(addressFamily: string  | undefined) {
        this['address_family'] = addressFamily;
    }
    public get addressFamily(): string | undefined {
        return this['address_family'];
    }
    public withDescription(description: string): ShowGdgwRoutetable {
        this['description'] = description;
        return this;
    }
}