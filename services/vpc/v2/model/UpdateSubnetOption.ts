import { ExtraDhcpOption } from './ExtraDhcpOption';


export class UpdateSubnetOption {
    public name?: string;
    public description?: string;
    private 'ipv6_enable'?: boolean;
    private 'dhcp_enable'?: boolean;
    private 'primary_dns'?: string;
    private 'secondary_dns'?: string;
    public dnsList?: Array<string>;
    private 'extra_dhcp_opts'?: Array<ExtraDhcpOption>;
    private 'enable_network_address_usage_metrics'?: boolean;
    public constructor(name?: string) { 
        this['name'] = name;
    }
    public withName(name: string): UpdateSubnetOption {
        this['name'] = name;
        return this;
    }
    public withDescription(description: string): UpdateSubnetOption {
        this['description'] = description;
        return this;
    }
    public withIpv6Enable(ipv6Enable: boolean): UpdateSubnetOption {
        this['ipv6_enable'] = ipv6Enable;
        return this;
    }
    public set ipv6Enable(ipv6Enable: boolean  | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable(): boolean | undefined {
        return this['ipv6_enable'];
    }
    public withDhcpEnable(dhcpEnable: boolean): UpdateSubnetOption {
        this['dhcp_enable'] = dhcpEnable;
        return this;
    }
    public set dhcpEnable(dhcpEnable: boolean  | undefined) {
        this['dhcp_enable'] = dhcpEnable;
    }
    public get dhcpEnable(): boolean | undefined {
        return this['dhcp_enable'];
    }
    public withPrimaryDns(primaryDns: string): UpdateSubnetOption {
        this['primary_dns'] = primaryDns;
        return this;
    }
    public set primaryDns(primaryDns: string  | undefined) {
        this['primary_dns'] = primaryDns;
    }
    public get primaryDns(): string | undefined {
        return this['primary_dns'];
    }
    public withSecondaryDns(secondaryDns: string): UpdateSubnetOption {
        this['secondary_dns'] = secondaryDns;
        return this;
    }
    public set secondaryDns(secondaryDns: string  | undefined) {
        this['secondary_dns'] = secondaryDns;
    }
    public get secondaryDns(): string | undefined {
        return this['secondary_dns'];
    }
    public withDnsList(dnsList: Array<string>): UpdateSubnetOption {
        this['dnsList'] = dnsList;
        return this;
    }
    public withExtraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOption>): UpdateSubnetOption {
        this['extra_dhcp_opts'] = extraDhcpOpts;
        return this;
    }
    public set extraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOption>  | undefined) {
        this['extra_dhcp_opts'] = extraDhcpOpts;
    }
    public get extraDhcpOpts(): Array<ExtraDhcpOption> | undefined {
        return this['extra_dhcp_opts'];
    }
    public withEnableNetworkAddressUsageMetrics(enableNetworkAddressUsageMetrics: boolean): UpdateSubnetOption {
        this['enable_network_address_usage_metrics'] = enableNetworkAddressUsageMetrics;
        return this;
    }
    public set enableNetworkAddressUsageMetrics(enableNetworkAddressUsageMetrics: boolean  | undefined) {
        this['enable_network_address_usage_metrics'] = enableNetworkAddressUsageMetrics;
    }
    public get enableNetworkAddressUsageMetrics(): boolean | undefined {
        return this['enable_network_address_usage_metrics'];
    }
}