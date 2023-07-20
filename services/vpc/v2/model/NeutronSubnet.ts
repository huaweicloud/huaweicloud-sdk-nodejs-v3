import { AllocationPool } from './AllocationPool';
import { HostRoute } from './HostRoute';


export class NeutronSubnet {
    private 'allocation_pools'?: Array<AllocationPool>;
    public cidr?: string;
    private 'dns_nameservers'?: Array<string>;
    private 'enable_dhcp'?: boolean;
    private 'gateway_ip'?: string;
    private 'host_routes'?: Array<HostRoute>;
    public id?: string;
    private 'ip_version'?: number;
    private 'ipv6_address_mode'?: string;
    private 'ipv6_ra_mode'?: string;
    public name?: string;
    private 'network_id'?: string;
    private 'tenant_id'?: string;
    private 'project_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    private 'subnetpool_id'?: string;
    public constructor(allocationPools?: Array<AllocationPool>, cidr?: string, dnsNameservers?: Array<string>, enableDhcp?: boolean, gatewayIp?: string, hostRoutes?: Array<HostRoute>, id?: string, ipVersion?: number, ipv6AddressMode?: string, ipv6RaMode?: string, name?: string, networkId?: string, tenantId?: string, projectId?: string, createdAt?: Date, updatedAt?: Date) { 
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
    public set allocationPools(allocationPools: Array<AllocationPool>  | undefined) {
        this['allocation_pools'] = allocationPools;
    }
    public get allocationPools(): Array<AllocationPool> | undefined {
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
    public set dnsNameservers(dnsNameservers: Array<string>  | undefined) {
        this['dns_nameservers'] = dnsNameservers;
    }
    public get dnsNameservers(): Array<string> | undefined {
        return this['dns_nameservers'];
    }
    public withEnableDhcp(enableDhcp: boolean): NeutronSubnet {
        this['enable_dhcp'] = enableDhcp;
        return this;
    }
    public set enableDhcp(enableDhcp: boolean  | undefined) {
        this['enable_dhcp'] = enableDhcp;
    }
    public get enableDhcp(): boolean | undefined {
        return this['enable_dhcp'];
    }
    public withGatewayIp(gatewayIp: string): NeutronSubnet {
        this['gateway_ip'] = gatewayIp;
        return this;
    }
    public set gatewayIp(gatewayIp: string  | undefined) {
        this['gateway_ip'] = gatewayIp;
    }
    public get gatewayIp(): string | undefined {
        return this['gateway_ip'];
    }
    public withHostRoutes(hostRoutes: Array<HostRoute>): NeutronSubnet {
        this['host_routes'] = hostRoutes;
        return this;
    }
    public set hostRoutes(hostRoutes: Array<HostRoute>  | undefined) {
        this['host_routes'] = hostRoutes;
    }
    public get hostRoutes(): Array<HostRoute> | undefined {
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
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
    public withIpv6AddressMode(ipv6AddressMode: string): NeutronSubnet {
        this['ipv6_address_mode'] = ipv6AddressMode;
        return this;
    }
    public set ipv6AddressMode(ipv6AddressMode: string  | undefined) {
        this['ipv6_address_mode'] = ipv6AddressMode;
    }
    public get ipv6AddressMode(): string | undefined {
        return this['ipv6_address_mode'];
    }
    public withIpv6RaMode(ipv6RaMode: string): NeutronSubnet {
        this['ipv6_ra_mode'] = ipv6RaMode;
        return this;
    }
    public set ipv6RaMode(ipv6RaMode: string  | undefined) {
        this['ipv6_ra_mode'] = ipv6RaMode;
    }
    public get ipv6RaMode(): string | undefined {
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
    public set networkId(networkId: string  | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId(): string | undefined {
        return this['network_id'];
    }
    public withTenantId(tenantId: string): NeutronSubnet {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withProjectId(projectId: string): NeutronSubnet {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: Date): NeutronSubnet {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): NeutronSubnet {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withSubnetpoolId(subnetpoolId: string): NeutronSubnet {
        this['subnetpool_id'] = subnetpoolId;
        return this;
    }
    public set subnetpoolId(subnetpoolId: string  | undefined) {
        this['subnetpool_id'] = subnetpoolId;
    }
    public get subnetpoolId(): string | undefined {
        return this['subnetpool_id'];
    }
}