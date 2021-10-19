

export class NeutronListFloatingIpsRequest {
    public limit?: number;
    public marker?: string;
    private 'page_reverse'?: boolean | undefined;
    public id?: string;
    private 'floating_ip_address'?: string | undefined;
    private 'router_id'?: string | undefined;
    private 'port_id'?: string | undefined;
    private 'fixed_ip_address'?: string | undefined;
    private 'tenant_id'?: string | undefined;
    private 'floating_network_id'?: string | undefined;
    public constructor() { 
    }
    public withLimit(limit: number): NeutronListFloatingIpsRequest {
        this['limit'] = limit;
        return this;
    }
    public withMarker(marker: string): NeutronListFloatingIpsRequest {
        this['marker'] = marker;
        return this;
    }
    public withPageReverse(pageReverse: boolean): NeutronListFloatingIpsRequest {
        this['page_reverse'] = pageReverse;
        return this;
    }
    public set pageReverse(pageReverse: boolean | undefined) {
        this['page_reverse'] = pageReverse;
    }
    public get pageReverse() {
        return this['page_reverse'];
    }
    public withId(id: string): NeutronListFloatingIpsRequest {
        this['id'] = id;
        return this;
    }
    public withFloatingIpAddress(floatingIpAddress: string): NeutronListFloatingIpsRequest {
        this['floating_ip_address'] = floatingIpAddress;
        return this;
    }
    public set floatingIpAddress(floatingIpAddress: string | undefined) {
        this['floating_ip_address'] = floatingIpAddress;
    }
    public get floatingIpAddress() {
        return this['floating_ip_address'];
    }
    public withRouterId(routerId: string): NeutronListFloatingIpsRequest {
        this['router_id'] = routerId;
        return this;
    }
    public set routerId(routerId: string | undefined) {
        this['router_id'] = routerId;
    }
    public get routerId() {
        return this['router_id'];
    }
    public withPortId(portId: string): NeutronListFloatingIpsRequest {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string | undefined) {
        this['port_id'] = portId;
    }
    public get portId() {
        return this['port_id'];
    }
    public withFixedIpAddress(fixedIpAddress: string): NeutronListFloatingIpsRequest {
        this['fixed_ip_address'] = fixedIpAddress;
        return this;
    }
    public set fixedIpAddress(fixedIpAddress: string | undefined) {
        this['fixed_ip_address'] = fixedIpAddress;
    }
    public get fixedIpAddress() {
        return this['fixed_ip_address'];
    }
    public withTenantId(tenantId: string): NeutronListFloatingIpsRequest {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withFloatingNetworkId(floatingNetworkId: string): NeutronListFloatingIpsRequest {
        this['floating_network_id'] = floatingNetworkId;
        return this;
    }
    public set floatingNetworkId(floatingNetworkId: string | undefined) {
        this['floating_network_id'] = floatingNetworkId;
    }
    public get floatingNetworkId() {
        return this['floating_network_id'];
    }
}