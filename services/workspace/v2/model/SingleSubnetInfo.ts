

export class SingleSubnetInfo {
    public id?: string;
    public unused?: boolean;
    public checked?: boolean;
    private 'vpc_id'?: string;
    public name?: string;
    public cidr?: string;
    private 'gateway_ip'?: string;
    private 'dhcp_enable'?: boolean;
    private 'ipv6_enable'?: boolean;
    private 'primary_dns'?: string;
    private 'secondary_dns'?: string;
    public status?: string;
    private 'availability_zone'?: string;
    private 'neutron_subnet_id'?: string;
    private 'neutron_ipv6_subnet_id'?: string;
    public description?: string;
    public constructor() { 
    }
    public withId(id: string): SingleSubnetInfo {
        this['id'] = id;
        return this;
    }
    public withUnused(unused: boolean): SingleSubnetInfo {
        this['unused'] = unused;
        return this;
    }
    public withChecked(checked: boolean): SingleSubnetInfo {
        this['checked'] = checked;
        return this;
    }
    public withVpcId(vpcId: string): SingleSubnetInfo {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withName(name: string): SingleSubnetInfo {
        this['name'] = name;
        return this;
    }
    public withCidr(cidr: string): SingleSubnetInfo {
        this['cidr'] = cidr;
        return this;
    }
    public withGatewayIp(gatewayIp: string): SingleSubnetInfo {
        this['gateway_ip'] = gatewayIp;
        return this;
    }
    public set gatewayIp(gatewayIp: string  | undefined) {
        this['gateway_ip'] = gatewayIp;
    }
    public get gatewayIp(): string | undefined {
        return this['gateway_ip'];
    }
    public withDhcpEnable(dhcpEnable: boolean): SingleSubnetInfo {
        this['dhcp_enable'] = dhcpEnable;
        return this;
    }
    public set dhcpEnable(dhcpEnable: boolean  | undefined) {
        this['dhcp_enable'] = dhcpEnable;
    }
    public get dhcpEnable(): boolean | undefined {
        return this['dhcp_enable'];
    }
    public withIpv6Enable(ipv6Enable: boolean): SingleSubnetInfo {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withPrimaryDns(primaryDns: string): SingleSubnetInfo {
        this['primary_dns'] = primaryDns;
        return this;
    }
    public set primaryDns(primaryDns: string  | undefined) {
        this['primary_dns'] = primaryDns;
    }
    public get primaryDns(): string | undefined {
        return this['primary_dns'];
    }
    public withSecondaryDns(secondaryDns: string): SingleSubnetInfo {
        this['secondary_dns'] = secondaryDns;
        return this;
    }
    public set secondaryDns(secondaryDns: string  | undefined) {
        this['secondary_dns'] = secondaryDns;
    }
    public get secondaryDns(): string | undefined {
        return this['secondary_dns'];
    }
    public withStatus(status: string): SingleSubnetInfo {
        this['status'] = status;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): SingleSubnetInfo {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string  | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone(): string | undefined {
        return this['availability_zone'];
    }
    public withNeutronSubnetId(neutronSubnetId: string): SingleSubnetInfo {
        this['neutron_subnet_id'] = neutronSubnetId;
        return this;
    }
    public set neutronSubnetId(neutronSubnetId: string  | undefined) {
        this['neutron_subnet_id'] = neutronSubnetId;
    }
    public get neutronSubnetId(): string | undefined {
        return this['neutron_subnet_id'];
    }
    public withNeutronIpv6SubnetId(neutronIpv6SubnetId: string): SingleSubnetInfo {
        this['neutron_ipv6_subnet_id'] = neutronIpv6SubnetId;
        return this;
    }
    public set neutronIpv6SubnetId(neutronIpv6SubnetId: string  | undefined) {
        this['neutron_ipv6_subnet_id'] = neutronIpv6SubnetId;
    }
    public get neutronIpv6SubnetId(): string | undefined {
        return this['neutron_ipv6_subnet_id'];
    }
    public withDescription(description: string): SingleSubnetInfo {
        this['description'] = description;
        return this;
    }
}