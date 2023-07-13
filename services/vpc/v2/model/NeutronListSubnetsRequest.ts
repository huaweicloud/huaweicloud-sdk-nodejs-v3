

export class NeutronListSubnetsRequest {
    public limit?: number;
    public marker?: string;
    public id?: string;
    public cidr?: string;
    public name?: string;
    private 'enable_dhcp'?: boolean | undefined;
    private 'network_id'?: string | undefined;
    private 'ip_version'?: number | undefined;
    private 'gateway_ip'?: string | undefined;
    private 'tenant_id'?: string | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): NeutronListSubnetsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): NeutronListSubnetsRequest {
        this['marker'] = marker;
        return this;
    }
    public withId(id: string): NeutronListSubnetsRequest {
        this['id'] = id;
        return this;
    }
    public withCidr(cidr: string): NeutronListSubnetsRequest {
        this['cidr'] = cidr;
        return this;
    }
    public withName(name: string): NeutronListSubnetsRequest {
        this['name'] = name;
        return this;
    }
    public withEnableDhcp(enableDhcp: boolean): NeutronListSubnetsRequest {
        this['enable_dhcp'] = enableDhcp;
        return this;
    }
    public set enableDhcp(enableDhcp: boolean | undefined) {
        this['enable_dhcp'] = enableDhcp;
    }
    public get enableDhcp() {
        return this['enable_dhcp'];
    }
    public withNetworkId(networkId: string): NeutronListSubnetsRequest {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId() {
        return this['network_id'];
    }
    public withIpVersion(ipVersion: number): NeutronListSubnetsRequest {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withGatewayIp(gatewayIp: string): NeutronListSubnetsRequest {
        this['gateway_ip'] = gatewayIp;
        return this;
    }
    public set gatewayIp(gatewayIp: string | undefined) {
        this['gateway_ip'] = gatewayIp;
    }
    public get gatewayIp() {
        return this['gateway_ip'];
    }
    public withTenantId(tenantId: string): NeutronListSubnetsRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
}