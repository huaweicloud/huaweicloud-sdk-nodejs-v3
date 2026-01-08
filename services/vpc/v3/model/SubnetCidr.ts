

export class SubnetCidr {
    public id?: string;
    private 'ip_version'?: string;
    public cidr?: string;
    private 'gateway_ip'?: string;
    private 'enable_dhcp'?: boolean;
    public constructor(id?: string, ipVersion?: string, cidr?: string, gatewayIp?: string, enableDhcp?: boolean) { 
        this['id'] = id;
        this['ip_version'] = ipVersion;
        this['cidr'] = cidr;
        this['gateway_ip'] = gatewayIp;
        this['enable_dhcp'] = enableDhcp;
    }
    public withId(id: string): SubnetCidr {
        this['id'] = id;
        return this;
    }
    public withIpVersion(ipVersion: string): SubnetCidr {
        this['ip_version'] = ipVersion;
        return this;
    }
    public set ipVersion(ipVersion: string  | undefined) {
        this['ip_version'] = ipVersion;
    }
    public get ipVersion(): string | undefined {
        return this['ip_version'];
    }
    public withCidr(cidr: string): SubnetCidr {
        this['cidr'] = cidr;
        return this;
    }
    public withGatewayIp(gatewayIp: string): SubnetCidr {
        this['gateway_ip'] = gatewayIp;
        return this;
    }
    public set gatewayIp(gatewayIp: string  | undefined) {
        this['gateway_ip'] = gatewayIp;
    }
    public get gatewayIp(): string | undefined {
        return this['gateway_ip'];
    }
    public withEnableDhcp(enableDhcp: boolean): SubnetCidr {
        this['enable_dhcp'] = enableDhcp;
        return this;
    }
    public set enableDhcp(enableDhcp: boolean  | undefined) {
        this['enable_dhcp'] = enableDhcp;
    }
    public get enableDhcp(): boolean | undefined {
        return this['enable_dhcp'];
    }
}