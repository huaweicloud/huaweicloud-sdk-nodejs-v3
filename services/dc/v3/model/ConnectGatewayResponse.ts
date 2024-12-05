

export class ConnectGatewayResponse {
    public id?: string;
    private 'tenant_id'?: string;
    public name?: string;
    public description?: string;
    private 'address_family'?: ConnectGatewayResponseAddressFamilyEnum | string;
    public status?: string;
    private 'access_site'?: string;
    private 'bgp_asn'?: number;
    private 'current_geip_count'?: number;
    private 'created_time'?: Date;
    private 'updated_time'?: Date;
    private 'gcb_id'?: string;
    private 'gateway_site'?: string;
    public constructor() { 
    }
    public withId(id: string): ConnectGatewayResponse {
        this['id'] = id;
        return this;
    }
    public withTenantId(tenantId: string): ConnectGatewayResponse {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withName(name: string): ConnectGatewayResponse {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): ConnectGatewayResponse {
        this['description'] = description;
        return this;
    }
    public withAddressFamily(addressFamily: ConnectGatewayResponseAddressFamilyEnum | string): ConnectGatewayResponse {
        this['address_family'] = addressFamily;
        return this;
    }
    public set addressFamily(addressFamily: ConnectGatewayResponseAddressFamilyEnum | string  | undefined) {
        this['address_family'] = addressFamily;
    }
    public get addressFamily(): ConnectGatewayResponseAddressFamilyEnum | string | undefined {
        return this['address_family'];
    }
    public withStatus(status: string): ConnectGatewayResponse {
        this['status'] = status;
        return this;
    }
    public withAccessSite(accessSite: string): ConnectGatewayResponse {
        this['access_site'] = accessSite;
        return this;
    }
    public set accessSite(accessSite: string  | undefined) {
        this['access_site'] = accessSite;
    }
    public get accessSite(): string | undefined {
        return this['access_site'];
    }
    public withBgpAsn(bgpAsn: number): ConnectGatewayResponse {
        this['bgp_asn'] = bgpAsn;
        return this;
    }
    public set bgpAsn(bgpAsn: number  | undefined) {
        this['bgp_asn'] = bgpAsn;
    }
    public get bgpAsn(): number | undefined {
        return this['bgp_asn'];
    }
    public withCurrentGeipCount(currentGeipCount: number): ConnectGatewayResponse {
        this['current_geip_count'] = currentGeipCount;
        return this;
    }
    public set currentGeipCount(currentGeipCount: number  | undefined) {
        this['current_geip_count'] = currentGeipCount;
    }
    public get currentGeipCount(): number | undefined {
        return this['current_geip_count'];
    }
    public withCreatedTime(createdTime: Date): ConnectGatewayResponse {
        this['created_time'] = createdTime;
        return this;
    }
    public set createdTime(createdTime: Date  | undefined) {
        this['created_time'] = createdTime;
    }
    public get createdTime(): Date | undefined {
        return this['created_time'];
    }
    public withUpdatedTime(updatedTime: Date): ConnectGatewayResponse {
        this['updated_time'] = updatedTime;
        return this;
    }
    public set updatedTime(updatedTime: Date  | undefined) {
        this['updated_time'] = updatedTime;
    }
    public get updatedTime(): Date | undefined {
        return this['updated_time'];
    }
    public withGcbId(gcbId: string): ConnectGatewayResponse {
        this['gcb_id'] = gcbId;
        return this;
    }
    public set gcbId(gcbId: string  | undefined) {
        this['gcb_id'] = gcbId;
    }
    public get gcbId(): string | undefined {
        return this['gcb_id'];
    }
    public withGatewaySite(gatewaySite: string): ConnectGatewayResponse {
        this['gateway_site'] = gatewaySite;
        return this;
    }
    public set gatewaySite(gatewaySite: string  | undefined) {
        this['gateway_site'] = gatewaySite;
    }
    public get gatewaySite(): string | undefined {
        return this['gateway_site'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ConnectGatewayResponseAddressFamilyEnum {
    IPV4 = 'ipv4',
    DUAL = 'dual'
}
