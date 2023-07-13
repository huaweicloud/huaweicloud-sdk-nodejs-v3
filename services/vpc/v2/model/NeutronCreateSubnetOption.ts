import { AllocationPool } from './AllocationPool';
import { HostRoute } from './HostRoute';


export class NeutronCreateSubnetOption {
    public name?: string;
    public cidr: string;
    private 'network_id': string | undefined;
    private 'gateway_ip'?: string | undefined;
    private 'ip_version'?: number | undefined;
    private 'allocation_pools'?: Array<AllocationPool> | undefined;
    private 'dns_nameservers'?: Array<string> | undefined;
    private 'host_routes'?: Array<HostRoute> | undefined;
    private 'enable_dhcp'?: boolean | undefined;
    private 'ipv6_address_mode'?: string | undefined;
    private 'ipv6_ra_mode'?: string | undefined;
    public constructor(cidr?: any, networkId?: any) { 
        this['cidr'] = cidr;
        this['network_id'] = networkId;
    }
    public withName(name: string): NeutronCreateSubnetOption {
        this['name'] = name;
        return this;
    }
    public withCidr(cidr: string): NeutronCreateSubnetOption {
        this['cidr'] = cidr;
        return this;
    }
    public withNetworkId(networkId: string): NeutronCreateSubnetOption {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId() {
        return this['network_id'];
    }
    public withGatewayIp(gatewayIp: string): NeutronCreateSubnetOption {
        this['gateway_ip'] = gatewayIp;
        return this;
    }
    public set gatewayIp(gatewayIp: string | undefined) {
        this['gateway_ip'] = gatewayIp;
    }
    public get gatewayIp() {
        return this['gateway_ip'];
    }
    public withIpVersion(ipVersion: number): NeutronCreateSubnetOption {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion() {
        return this['ip_version'];
    }
    public withAllocationPools(allocationPools: Array<AllocationPool>): NeutronCreateSubnetOption {
        this['allocation_pools'] = allocationPools;
        return this;
    }
    public set allocationPools(allocationPools: Array<AllocationPool> | undefined) {
        this['allocation_pools'] = allocationPools;
    }
    public get allocationPools() {
        return this['allocation_pools'];
    }
    public withDnsNameservers(dnsNameservers: Array<string>): NeutronCreateSubnetOption {
        this['dns_nameservers'] = dnsNameservers;
        return this;
    }
    public set dnsNameservers(dnsNameservers: Array<string> | undefined) {
        this['dns_nameservers'] = dnsNameservers;
    }
    public get dnsNameservers() {
        return this['dns_nameservers'];
    }
    public withHostRoutes(hostRoutes: Array<HostRoute>): NeutronCreateSubnetOption {
        this['host_routes'] = hostRoutes;
        return this;
    }
    public set hostRoutes(hostRoutes: Array<HostRoute> | undefined) {
        this['host_routes'] = hostRoutes;
    }
    public get hostRoutes() {
        return this['host_routes'];
    }
    public withEnableDhcp(enableDhcp: boolean): NeutronCreateSubnetOption {
        this['enable_dhcp'] = enableDhcp;
        return this;
    }
    public set enableDhcp(enableDhcp: boolean | undefined) {
        this['enable_dhcp'] = enableDhcp;
    }
    public get enableDhcp() {
        return this['enable_dhcp'];
    }
    public withIpv6AddressMode(ipv6AddressMode: string): NeutronCreateSubnetOption {
        this['ipv6_address_mode'] = ipv6AddressMode;
        return this;
    }
    public set ipv6AddressMode(ipv6AddressMode: string | undefined) {
        this['ipv6_address_mode'] = ipv6AddressMode;
    }
    public get ipv6AddressMode() {
        return this['ipv6_address_mode'];
    }
    public withIpv6RaMode(ipv6RaMode: string): NeutronCreateSubnetOption {
        this['ipv6_ra_mode'] = ipv6RaMode;
        return this;
    }
    public set ipv6RaMode(ipv6RaMode: string | undefined) {
        this['ipv6_ra_mode'] = ipv6RaMode;
    }
    public get ipv6RaMode() {
        return this['ipv6_ra_mode'];
    }
}