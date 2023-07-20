

export class SubnetIpAvailability {
    private 'used_ips'?: number;
    private 'subnet_id'?: string;
    private 'subnet_name'?: string;
    private 'ip_version'?: number;
    public cidr?: string;
    private 'total_ips'?: number;
    public constructor(usedIps?: number, subnetId?: string, subnetName?: string, ipVersion?: number, cidr?: string, totalIps?: number) { 
        this['used_ips'] = usedIps;
        this['subnet_id'] = subnetId;
        this['subnet_name'] = subnetName;
        this['ip_version'] = ipVersion;
        this['cidr'] = cidr;
        this['total_ips'] = totalIps;
    }
    public withUsedIps(usedIps: number): SubnetIpAvailability {
        this['used_ips'] = usedIps;
        return this;
    }
    public set usedIps(usedIps: number  | undefined) {
        this['used_ips'] = usedIps;
    }
    public get usedIps(): number | undefined {
        return this['used_ips'];
    }
    public withSubnetId(subnetId: string): SubnetIpAvailability {
        this['subnet_id'] = subnetId;
        return this;
    }
    public set subnetId(subnetId: string  | undefined) {
        this['subnet_id'] = subnetId;
    }
    public get subnetId(): string | undefined {
        return this['subnet_id'];
    }
    public withSubnetName(subnetName: string): SubnetIpAvailability {
        this['subnet_name'] = subnetName;
        return this;
    }
    public set subnetName(subnetName: string  | undefined) {
        this['subnet_name'] = subnetName;
    }
    public get subnetName(): string | undefined {
        return this['subnet_name'];
    }
    public withIpVersion(ipVersion: number): SubnetIpAvailability {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: number  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): number | undefined {
        return this['ip_version'];
    }
    public withCidr(cidr: string): SubnetIpAvailability {
        this['cidr'] = cidr;
        return this;
    }
    public withTotalIps(totalIps: number): SubnetIpAvailability {
        this['total_ips'] = totalIps;
        return this;
    }
    public set totalIps(totalIps: number  | undefined) {
        this['total_ips'] = totalIps;
    }
    public get totalIps(): number | undefined {
        return this['total_ips'];
    }
}