import { AllocationPool } from './AllocationPool';
import { HostRoute } from './HostRoute';


export class NeutronUpdateSubnetOption {
    private 'dns_nameservers'?: Array<string>;
    private 'enable_dhcp'?: boolean;
    private 'host_routes'?: Array<HostRoute>;
    public name?: string;
    private 'allocation_pools'?: Array<AllocationPool>;
    public constructor() { 
    }
    public withDnsNameservers(dnsNameservers: Array<string>): NeutronUpdateSubnetOption {
        this['dns_nameservers'] = dnsNameservers;
        return this;
    }
    public set dnsNameservers(dnsNameservers: Array<string>  | undefined) {
        this['dns_nameservers'] = dnsNameservers;
    }
    public get dnsNameservers(): Array<string> | undefined {
        return this['dns_nameservers'];
    }
    public withEnableDhcp(enableDhcp: boolean): NeutronUpdateSubnetOption {
        this['enable_dhcp'] = enableDhcp;
        return this;
    }
    public set enableDhcp(enableDhcp: boolean  | undefined) {
        this['enable_dhcp'] = enableDhcp;
    }
    public get enableDhcp(): boolean | undefined {
        return this['enable_dhcp'];
    }
    public withHostRoutes(hostRoutes: Array<HostRoute>): NeutronUpdateSubnetOption {
        this['host_routes'] = hostRoutes;
        return this;
    }
    public set hostRoutes(hostRoutes: Array<HostRoute>  | undefined) {
        this['host_routes'] = hostRoutes;
    }
    public get hostRoutes(): Array<HostRoute> | undefined {
        return this['host_routes'];
    }
    public withName(name: string): NeutronUpdateSubnetOption {
        this['name'] = name;
        return this;
    }
    public withAllocationPools(allocationPools: Array<AllocationPool>): NeutronUpdateSubnetOption {
        this['allocation_pools'] = allocationPools;
        return this;
    }
    public set allocationPools(allocationPools: Array<AllocationPool>  | undefined) {
        this['allocation_pools'] = allocationPools;
    }
    public get allocationPools(): Array<AllocationPool> | undefined {
        return this['allocation_pools'];
    }
}