

export class Subnet {
    public id?: string;
    public name?: string;
    private 'ipv6_enable'?: boolean;
    public cidr?: string;
    private 'cidr_v6'?: string;
    private 'gateway_ip'?: string;
    private 'gateway_ip_v6'?: string;
    private 'availability_zone'?: string;
    public constructor() { 
    }
    public withId(id: string): Subnet {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Subnet {
        this['name'] = name;
        return this;
    }
    public withIpv6Enable(ipv6Enable: boolean): Subnet {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withCidr(cidr: string): Subnet {
        this['cidr'] = cidr;
        return this;
    }
    public withCidrV6(cidrV6: string): Subnet {
        this['cidr_v6'] = cidrV6;
        return this;
    }
    public set cidrV6(cidrV6: string  | undefined) {
        this['cidr_v6'] = cidrV6;
    }
    public get cidrV6(): string | undefined {
        return this['cidr_v6'];
    }
    public withGatewayIp(gatewayIp: string): Subnet {
        this['gateway_ip'] = gatewayIp;
        return this;
    }
    public set gatewayIp(gatewayIp: string  | undefined) {
        this['gateway_ip'] = gatewayIp;
    }
    public get gatewayIp(): string | undefined {
        return this['gateway_ip'];
    }
    public withGatewayIpV6(gatewayIpV6: string): Subnet {
        this['gateway_ip_v6'] = gatewayIpV6;
        return this;
    }
    public set gatewayIpV6(gatewayIpV6: string  | undefined) {
        this['gateway_ip_v6'] = gatewayIpV6;
    }
    public get gatewayIpV6(): string | undefined {
        return this['gateway_ip_v6'];
    }
    public withAvailabilityZone(availabilityZone: string): Subnet {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
}