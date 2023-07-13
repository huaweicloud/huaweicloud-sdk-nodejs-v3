import { AllocationPool } from './AllocationPool';
import { HostRoute } from './HostRoute';


export class NeutronSubnet {
    private 'allocation_pools': Array<AllocationPool> | undefined;
    public cidr: string;
    private 'dns_nameservers': Array<string> | undefined;
    private 'enable_dhcp': boolean | undefined;
    private 'gateway_ip': string | undefined;
    private 'host_routes': Array<HostRoute> | undefined;
    public id: string;
    private 'ip_version': number | undefined;
    private 'ipv6_address_mode': string | undefined;
    private 'ipv6_ra_mode': string | undefined;
    public name: string;
    private 'network_id': string | undefined;
    private 'tenant_id': string | undefined;
    private 'project_id': string | undefined;
    private 'created_at': Date | undefined;
    private 'updated_at': Date | undefined;
    private 'subnetpool_id'?: string | undefined;
    public constructor(allocationPools?: any, cidr?: any, dnsNameservers?: any, enableDhcp?: any, gatewayIp?: any, hostRoutes?: any, id?: any, ipVersion?: any, ipv6AddressMode?: any, ipv6RaMode?: any, name?: any, networkId?: any, tenantId?: any, projectId?: any, createdAt?: any, updatedAt?: any) { 
        this['allocation_pools'] = allocationPools;
        this['cidr'] = cidr;
        this['dns_nameservers'] = dnsNameservers;
        this['enable_dhcp'] = enableDhcp;
        this['gateway_ip'] = gatewayIp;
        this['host_routes'] = hostRoutes;
        this['id'] = id;
        this['ip_version'] = ipVersion;
        this['ipv6_address_mode'] = ipv6AddressMode;
        this['ipv6_ra_mode'] = ipv6RaMode;
        this['name'] = name;
        this['network_id'] = networkId;
        this['tenant_id'] = tenantId;
        this['project_id'] = projectId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withAllocationPools(allocationPools: Array<AllocationPool>): NeutronSubnet {
        this['allocation_pools'] = allocationPools;
        return this;
    }
    public set allocationPools(allocationPools: Array<AllocationPool> | undefined) {
        this['allocation_pools'] = allocationPools;
    }
    public get allocationPools() {
        return this['allocation_pools'];
    }
    public withCidr(cidr: string): NeutronSubnet {
        this['cidr'] = cidr;
        return this;
    }
    public withDnsNameservers(dnsNameservers: Array<string>): NeutronSubnet {
        this['dns_nameservers'] = dnsNameservers;
        return this;
    }
    public set dnsNameservers(dnsNameservers: Array<string> | undefined) {
        this['dns_nameservers'] = dnsNameservers;
    }
    public get dnsNameservers() {
        return this['dns_nameservers'];
    }
    public withEnableDhcp(enableDhcp: boolean): NeutronSubnet {
        this['enable_dhcp'] = enableDhcp;
        return this;
    }
    public set enableDhcp(enableDhcp: boolean | undefined) {
        this['enable_dhcp'] = enableDhcp;
    }
    public get enableDhcp() {
        return this['enable_dhcp'];
    }
    public withGatewayIp(gatewayIp: string): NeutronSubnet {
        this['gateway_ip'] = gatewayIp;
        return this;
    }
    public set gatewayIp(gatewayIp: string | undefined) {
        this['gateway_ip'] = gatewayIp;
    }
    public get gatewayIp() {
        return this['gateway_ip'];
    }
    public withHostRoutes(hostRoutes: Array<HostRoute>): NeutronSubnet {
        this['host_routes'] = hostRoutes;
        return this;
    }
    public set hostRoutes(hostRoutes: Array<HostRoute> | undefined) {
        this['host_routes'] = hostRoutes;
    }
    public get hostRoutes() {
        return this['host_routes'];
    }
    public withId(id: string): NeutronSubnet {
        this['id'] = id;
        return this;
    }
    public withIpVersion(ipVersion: number): NeutronSubnet {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withIpv6AddressMode(ipv6AddressMode: string): NeutronSubnet {
        this['ipv6_address_mode'] = ipv6AddressMode;
        return this;
    }
    public set ipv6AddressMode(ipv6AddressMode: string | undefined) {
        this['ipv6_address_mode'] = ipv6AddressMode;
    }
    public get ipv6AddressMode() {
        return this['ipv6_address_mode'];
    }
    public withIpv6RaMode(ipv6RaMode: string): NeutronSubnet {
        this['ipv6_ra_mode'] = ipv6RaMode;
        return this;
    }
    public set ipv6RaMode(ipv6RaMode: string | undefined) {
        this['ipv6_ra_mode'] = ipv6RaMode;
    }
    public get ipv6RaMode() {
        return this['ipv6_ra_mode'];
    }
    public withName(name: string): NeutronSubnet {
        this['name'] = name;
        return this;
    }
    public withNetworkId(networkId: string): NeutronSubnet {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId() {
        return this['network_id'];
    }
    public withTenantId(tenantId: string): NeutronSubnet {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withProjectId(projectId: string): NeutronSubnet {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId() {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: Date): NeutronSubnet {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt() {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): NeutronSubnet {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt() {
        return this['updated_at'];
    }
    public withSubnetpoolId(subnetpoolId: string): NeutronSubnet {
        this['subnetpool_id'] = subnetpoolId;
        return this;
    }
    public set subnetpoolId(subnetpoolId: string | undefined) {
        this['subnetpool_id'] = subnetpoolId;
    }
    public get subnetpoolId() {
        return this['subnetpool_id'];
    }
}