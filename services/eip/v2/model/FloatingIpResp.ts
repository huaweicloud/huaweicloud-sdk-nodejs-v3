

export class FloatingIpResp {
    private 'fixed_ip_address'?: string | undefined;
    private 'floating_ip_address'?: string | undefined;
    private 'floating_network_id'?: string | undefined;
    public id?: string;
    private 'port_id'?: string | undefined;
    private 'router_id'?: string | undefined;
    public status?: FloatingIpRespStatusEnum;
    private 'tenant_id'?: string | undefined;
    private 'project_id'?: string | undefined;
    private 'dns_name'?: string | undefined;
    private 'dns_domain'?: string | undefined;
    private 'created_at'?: Date | undefined;
    private 'updated_at'?: Date | undefined;
    public constructor() { 
    }
    public withFixedIpAddress(fixedIpAddress: string): FloatingIpResp {
        this['fixed_ip_address'] = fixedIpAddress;
        return this;
    }
    public set fixedIpAddress(fixedIpAddress: string | undefined) {
        this['fixed_ip_address'] = fixedIpAddress;
    }
    public get fixedIpAddress() {
        return this['fixed_ip_address'];
    }
    public withFloatingIpAddress(floatingIpAddress: string): FloatingIpResp {
        this['floating_ip_address'] = floatingIpAddress;
        return this;
    }
    public set floatingIpAddress(floatingIpAddress: string | undefined) {
        this['floating_ip_address'] = floatingIpAddress;
    }
    public get floatingIpAddress() {
        return this['floating_ip_address'];
    }
    public withFloatingNetworkId(floatingNetworkId: string): FloatingIpResp {
        this['floating_network_id'] = floatingNetworkId;
        return this;
    }
    public set floatingNetworkId(floatingNetworkId: string | undefined) {
        this['floating_network_id'] = floatingNetworkId;
    }
    public get floatingNetworkId() {
        return this['floating_network_id'];
    }
    public withId(id: string): FloatingIpResp {
        this['id'] = id;
        return this;
    }
    public withPortId(portId: string): FloatingIpResp {
        this['port_id'] = portId;
        return this;
    }
    public set portId(portId: string | undefined) {
        this['port_id'] = portId;
    }
    public get portId() {
        return this['port_id'];
    }
    public withRouterId(routerId: string): FloatingIpResp {
        this['router_id'] = routerId;
        return this;
    }
    public set routerId(routerId: string | undefined) {
        this['router_id'] = routerId;
    }
    public get routerId() {
        return this['router_id'];
    }
    public withStatus(status: FloatingIpRespStatusEnum): FloatingIpResp {
        this['status'] = status;
        return this;
    }
    public withTenantId(tenantId: string): FloatingIpResp {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withProjectId(projectId: string): FloatingIpResp {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withDnsName(dnsName: string): FloatingIpResp {
        this['dns_name'] = dnsName;
        return this;
    }
    public set dnsName(dnsName: string | undefined) {
        this['dns_name'] = dnsName;
    }
    public get dnsName() {
        return this['dns_name'];
    }
    public withDnsDomain(dnsDomain: string): FloatingIpResp {
        this['dns_domain'] = dnsDomain;
        return this;
    }
    public set dnsDomain(dnsDomain: string | undefined) {
        this['dns_domain'] = dnsDomain;
    }
    public get dnsDomain() {
        return this['dns_domain'];
    }
    public withCreatedAt(createdAt: Date): FloatingIpResp {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): FloatingIpResp {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum FloatingIpRespStatusEnum {
    ACTIVE = 'ACTIVE',
    DOWN = 'DOWN',
    ERROR = 'ERROR'
}
