import { ExtraDhcpOption } from './ExtraDhcpOption';


export class CreateSubnetOption {
    public name: string;
    public description?: string;
    public cidr: string;
    private 'vpc_id': string | undefined;
    private 'gateway_ip': string | undefined;
    private 'ipv6_enable'?: boolean | undefined;
    private 'dhcp_enable'?: boolean | undefined;
    private 'primary_dns'?: string | undefined;
    private 'secondary_dns'?: string | undefined;
    public dnsList?: Array<string>;
    private 'availability_zone'?: string | undefined;
    private 'extra_dhcp_opts'?: Array<ExtraDhcpOption> | undefined;
    public constructor(name?: any, cidr?: any, vpcId?: any, gatewayIp?: any) { 
        this['name'] = name;
        this['cidr'] = cidr;
        this['vpc_id'] = vpcId;
        this['gateway_ip'] = gatewayIp;
    }
    public withName(name: string): CreateSubnetOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): CreateSubnetOption {
        this['description'] = description;
        return this;
    }
    public withCidr(cidr: string): CreateSubnetOption {
        this['cidr'] = cidr;
        return this;
    }
    public withVpcId(vpcId: string): CreateSubnetOption {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId() {
        return this['vpc_id'];
    }
    public withGatewayIp(gatewayIp: string): CreateSubnetOption {
        this['gateway_ip'] = gatewayIp;
        return this;
    }
    public set gatewayIp(gatewayIp: string | undefined) {
        this['gateway_ip'] = gatewayIp;
    }
    public get gatewayIp() {
        return this['gateway_ip'];
    }
    public withIpv6Enable(ipv6Enable: boolean): CreateSubnetOption {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable() {
        return this['ipv6_enable'];
    }
    public withDhcpEnable(dhcpEnable: boolean): CreateSubnetOption {
        this['dhcp_enable'] = dhcpEnable;
        return this;
    }
    public set dhcpEnable(dhcpEnable: boolean | undefined) {
        this['dhcp_enable'] = dhcpEnable;
    }
    public get dhcpEnable() {
        return this['dhcp_enable'];
    }
    public withPrimaryDns(primaryDns: string): CreateSubnetOption {
        this['primary_dns'] = primaryDns;
        return this;
    }
    public set primaryDns(primaryDns: string | undefined) {
        this['primary_dns'] = primaryDns;
    }
    public get primaryDns() {
        return this['primary_dns'];
    }
    public withSecondaryDns(secondaryDns: string): CreateSubnetOption {
        this['secondary_dns'] = secondaryDns;
        return this;
    }
    public set secondaryDns(secondaryDns: string | undefined) {
        this['secondary_dns'] = secondaryDns;
    }
    public get secondaryDns() {
        return this['secondary_dns'];
    }
    public withDnsList(dnsList: Array<string>): CreateSubnetOption {
        this['dnsList'] = dnsList;
        return this;
    }
    public withAvailabilityZone(availabilityZone: string): CreateSubnetOption {
        this['availability_zone'] = availabilityZone;
        return this;
    }
    public set availabilityZone(availabilityZone: string | undefined) {
        this['availability_zone'] = availabilityZone;
    }
    public get availabilityZone() {
        return this['availability_zone'];
    }
    public withExtraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOption>): CreateSubnetOption {
        this['extra_dhcp_opts'] = extraDhcpOpts;
        return this;
    }
    public set extraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOption> | undefined) {
        this['extra_dhcp_opts'] = extraDhcpOpts;
    }
    public get extraDhcpOpts() {
        return this['extra_dhcp_opts'];
    }
}