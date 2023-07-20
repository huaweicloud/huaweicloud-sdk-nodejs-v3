import { ExtraDhcpOption } from './ExtraDhcpOption';


export class Subnet {
    public id?: string;
    public name?: string;
    public description?: string;
    public cidr?: string;
    private 'gateway_ip'?: string;
    private 'ipv6_enable'?: boolean;
    private 'cidr_v6'?: string;
    private 'gateway_ip_v6'?: string;
    private 'dhcp_enable'?: boolean;
    private 'primary_dns'?: string;
    private 'secondary_dns'?: string;
    public dnsList?: Array<string>;
    private 'availability_zone'?: string;
    private 'vpc_id'?: string;
    public status?: SubnetStatusEnum | string;
    private 'neutron_network_id'?: string;
    private 'neutron_subnet_id'?: string;
    private 'neutron_subnet_id_v6'?: string;
    private 'extra_dhcp_opts'?: Array<ExtraDhcpOption>;
    public scope?: string;
    private 'tenant_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor(id?: string, name?: string, description?: string, cidr?: string, gatewayIp?: string, ipv6Enable?: boolean, cidrV6?: string, gatewayIpV6?: string, dhcpEnable?: boolean, primaryDns?: string, secondaryDns?: string, dnsList?: Array<string>, availabilityZone?: string, vpcId?: string, status?: string, neutronNetworkId?: string, neutronSubnetId?: string, neutronSubnetIdV6?: string, extraDhcpOpts?: Array<ExtraDhcpOption>, tenantId?: string, createdAt?: Date, updatedAt?: Date) { 
        this['id'] = id;
        this['name'] = name;
        this['description'] = description;
        this['cidr'] = cidr;
        this['gateway_ip'] = gatewayIp;
        this['ipv6_enable'] = ipv6Enable;
        this['cidr_v6'] = cidrV6;
        this['gateway_ip_v6'] = gatewayIpV6;
        this['dhcp_enable'] = dhcpEnable;
        this['primary_dns'] = primaryDns;
        this['secondary_dns'] = secondaryDns;
        this['dnsList'] = dnsList;
        this['availability_zone'] = availabilityZone;
        this['vpc_id'] = vpcId;
        this['status'] = status;
        this['neutron_network_id'] = neutronNetworkId;
        this['neutron_subnet_id'] = neutronSubnetId;
        this['neutron_subnet_id_v6'] = neutronSubnetIdV6;
        this['extra_dhcp_opts'] = extraDhcpOpts;
        this['tenant_id'] = tenantId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withId(id: string): Subnet {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Subnet {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): Subnet {
        this['description'] = description;
        return this;
    }
    public withCidr(cidr: string): Subnet {
        this['cidr'] = cidr;
        return this;
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
    public withDhcpEnable(dhcpEnable: boolean): Subnet {
        this['dhcp_enable'] = dhcpEnable;
        return this;
    }
    public set dhcpEnable(dhcpEnable: boolean  | undefined) {
        this['dhcp_enable'] = dhcpEnable;
    }
    public get dhcpEnable(): boolean | undefined {
        return this['dhcp_enable'];
    }
    public withPrimaryDns(primaryDns: string): Subnet {
        this['primary_dns'] = primaryDns;
        return this;
    }
    public set primaryDns(primaryDns: string  | undefined) {
        this['primary_dns'] = primaryDns;
    }
    public get primaryDns(): string | undefined {
        return this['primary_dns'];
    }
    public withSecondaryDns(secondaryDns: string): Subnet {
        this['secondary_dns'] = secondaryDns;
        return this;
    }
    public set secondaryDns(secondaryDns: string  | undefined) {
        this['secondary_dns'] = secondaryDns;
    }
    public get secondaryDns(): string | undefined {
        return this['secondary_dns'];
    }
    public withDnsList(dnsList: Array<string>): Subnet {
        this['dnsList'] = dnsList;
        return this;
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
    public withVpcId(vpcId: string): Subnet {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withStatus(status: SubnetStatusEnum | string): Subnet {
        this['status'] = status;
        return this;
    }
    public withNeutronNetworkId(neutronNetworkId: string): Subnet {
        this['neutron_network_id'] = neutronNetworkId;
        return this;
    }
    public set neutronNetworkId(neutronNetworkId: string  | undefined) {
        this['neutron_network_id'] = neutronNetworkId;
    }
    public get neutronNetworkId(): string | undefined {
        return this['neutron_network_id'];
    }
    public withNeutronSubnetId(neutronSubnetId: string): Subnet {
        this['neutron_subnet_id'] = neutronSubnetId;
        return this;
    }
    public set neutronSubnetId(neutronSubnetId: string  | undefined) {
        this['neutron_subnet_id'] = neutronSubnetId;
    }
    public get neutronSubnetId(): string | undefined {
        return this['neutron_subnet_id'];
    }
    public withNeutronSubnetIdV6(neutronSubnetIdV6: string): Subnet {
        this['neutron_subnet_id_v6'] = neutronSubnetIdV6;
        return this;
    }
    public set neutronSubnetIdV6(neutronSubnetIdV6: string  | undefined) {
        this['neutron_subnet_id_v6'] = neutronSubnetIdV6;
    }
    public get neutronSubnetIdV6(): string | undefined {
        return this['neutron_subnet_id_v6'];
    }
    public withExtraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOption>): Subnet {
        this['extra_dhcp_opts'] = extraDhcpOpts;
        return this;
    }
    public set extraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOption>  | undefined) {
        this['extra_dhcp_opts'] = extraDhcpOpts;
    }
    public get extraDhcpOpts(): Array<ExtraDhcpOption> | undefined {
        return this['extra_dhcp_opts'];
    }
    public withScope(scope: string): Subnet {
        this['scope'] = scope;
        return this;
    }
    public withTenantId(tenantId: string): Subnet {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withCreatedAt(createdAt: Date): Subnet {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): Subnet {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum SubnetStatusEnum {
    ACTIVE = 'ACTIVE',
    UNKNOWN = 'UNKNOWN',
    ERROR = 'ERROR'
}
