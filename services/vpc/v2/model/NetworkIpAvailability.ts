import { SubnetIpAvailability } from './SubnetIpAvailability';


export class NetworkIpAvailability {
    private 'network_id': string | undefined;
    private 'network_name': string | undefined;
    private 'tenant_id': string | undefined;
    private 'total_ips': number | undefined;
    private 'used_ips': number | undefined;
    private 'subnet_ip_availability': Array<SubnetIpAvailability> | undefined;
    public constructor(networkId?: any, networkName?: any, tenantId?: any, totalIps?: any, usedIps?: any, subnetIpAvailability?: any) { 
        this['network_id'] = networkId;
        this['network_name'] = networkName;
        this['tenant_id'] = tenantId;
        this['total_ips'] = totalIps;
        this['used_ips'] = usedIps;
        this['subnet_ip_availability'] = subnetIpAvailability;
    }
    public withNetworkId(networkId: string): NetworkIpAvailability {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId() {
        return this['network_id'];
    }
    public withNetworkName(networkName: string): NetworkIpAvailability {
        this['network_name'] = networkName;
        return this;
    }
    public set networkName(networkName: string | undefined) {
        this['network_name'] = networkName;
    }
    public get networkName() {
        return this['network_name'];
    }
    public withTenantId(tenantId: string): NetworkIpAvailability {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withTotalIps(totalIps: number): NetworkIpAvailability {
        this['total_ips'] = totalIps;
        return this;
    }
    public set totalIps(totalIps: number | undefined) {
        this['total_ips'] = totalIps;
    }
    public get totalIps() {
        return this['total_ips'];
    }
    public withUsedIps(usedIps: number): NetworkIpAvailability {
        this['used_ips'] = usedIps;
        return this;
    }
    public set usedIps(usedIps: number | undefined) {
        this['used_ips'] = usedIps;
    }
    public get usedIps() {
        return this['used_ips'];
    }
    public withSubnetIpAvailability(subnetIpAvailability: Array<SubnetIpAvailability>): NetworkIpAvailability {
        this['subnet_ip_availability'] = subnetIpAvailability;
        return this;
    }
    public set subnetIpAvailability(subnetIpAvailability: Array<SubnetIpAvailability> | undefined) {
        this['subnet_ip_availability'] = subnetIpAvailability;
    }
    public get subnetIpAvailability() {
        return this['subnet_ip_availability'];
    }
}