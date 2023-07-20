

export class PostAndPutFloatingIpResp {
    private 'fixed_ip_address'?: string;
    private 'floating_ip_address'?: string;
    private 'floating_network_id'?: string;
    public id?: string;
    private 'port_id'?: string;
    private 'router_id'?: string;
    public status?: PostAndPutFloatingIpRespStatusEnum | string;
    private 'tenant_id'?: string;
    private 'dns_name'?: string;
    private 'dns_domain'?: string;
    public constructor() { 
    }
    public withFixedIpAddress(fixedIpAddress: string): PostAndPutFloatingIpResp {
        this['fixed_ip_address'] = fixedIpAddress;
        return this;
    }
    public set fixedIpAddress(fixedIpAddress: string  | undefined) {
        this['fixed_ip_address'] = fixedIpAddress;
    }
    public get fixedIpAddress(): string | undefined {
        return this['fixed_ip_address'];
    }
    public withFloatingIpAddress(floatingIpAddress: string): PostAndPutFloatingIpResp {
        this['floating_ip_address'] = floatingIpAddress;
        return this;
    }
    public set floatingIpAddress(floatingIpAddress: string  | undefined) {
        this['floating_ip_address'] = floatingIpAddress;
    }
    public get floatingIpAddress(): string | undefined {
        return this['floating_ip_address'];
    }
    public withFloatingNetworkId(floatingNetworkId: string): PostAndPutFloatingIpResp {
        this['floating_network_id'] = floatingNetworkId;
        return this;
    }
    public set floatingNetworkId(floatingNetworkId: string  | undefined) {
        this['floating_network_id'] = floatingNetworkId;
    }
    public get floatingNetworkId(): string | undefined {
        return this['floating_network_id'];
    }
    public withId(id: string): PostAndPutFloatingIpResp {
        this['id'] = id;
        return this;
    }
    public withPortId(portId: string): PostAndPutFloatingIpResp {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string  | undefined) {
        this['port_id'] = portId;
    }
    public get portId(): string | undefined {
        return this['port_id'];
    }
    public withRouterId(routerId: string): PostAndPutFloatingIpResp {
        this['router_id'] = routerId;
        return this;
    }
    public set routerId(routerId: string  | undefined) {
        this['router_id'] = routerId;
    }
    public get routerId(): string | undefined {
        return this['router_id'];
    }
    public withStatus(status: PostAndPutFloatingIpRespStatusEnum | string): PostAndPutFloatingIpResp {
        this['status'] = status;
        return this;
    }
    public withTenantId(tenantId: string): PostAndPutFloatingIpResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withDnsName(dnsName: string): PostAndPutFloatingIpResp {
        this['dns_name'] = dnsName;
        return this;
    }
    public set dnsName(dnsName: string  | undefined) {
        this['dns_name'] = dnsName;
    }
    public get dnsName(): string | undefined {
        return this['dns_name'];
    }
    public withDnsDomain(dnsDomain: string): PostAndPutFloatingIpResp {
        this['dns_domain'] = dnsDomain;
        return this;
    }
    public set dnsDomain(dnsDomain: string  | undefined) {
        this['dns_domain'] = dnsDomain;
    }
    public get dnsDomain(): string | undefined {
        return this['dns_domain'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PostAndPutFloatingIpRespStatusEnum {
    ACTIVE = 'ACTIVE',
    DOWN = 'DOWN',
    ERROR = 'ERROR'
}
