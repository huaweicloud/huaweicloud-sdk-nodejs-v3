import { ExtraDhcpOption } from './ExtraDhcpOption';


export class UpdateSubnetOption {
    public name: string;
    public description?: string;
    private 'ipv6_enable'?: boolean | undefined;
    private 'dhcp_enable'?: boolean | undefined;
    private 'primary_dns'?: string | undefined;
    private 'secondary_dns'?: string | undefined;
    public dnsList?: Array<string>;
    private 'extra_dhcp_opts'?: Array<ExtraDhcpOption> | undefined;
    public constructor(name?: any) { 
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
    public set ipv6Enable(ipv6Enable: boolean | undefined) {
        this['ipv6_enable'] = ipv6Enable;
    }
    public get ipv6Enable() {
        return this['ipv6_enable'];
    }
    public withDhcpEnable(dhcpEnable: boolean): UpdateSubnetOption {
        this['dhcp_enable'] = dhcpEnable;
        return this;
    }
    public set dhcpEnable(dhcpEnable: boolean | undefined) {
        this['dhcp_enable'] = dhcpEnable;
    }
    public get dhcpEnable() {
        return this['dhcp_enable'];
    }
    public withPrimaryDns(primaryDns: string): UpdateSubnetOption {
        this['primary_dns'] = primaryDns;
        return this;
    }
    public set primaryDns(primaryDns: string | undefined) {
        this['primary_dns'] = primaryDns;
    }
    public get primaryDns() {
        return this['primary_dns'];
    }
    public withSecondaryDns(secondaryDns: string): UpdateSubnetOption {
        this['secondary_dns'] = secondaryDns;
        return this;
    }
    public set secondaryDns(secondaryDns: string | undefined) {
        this['secondary_dns'] = secondaryDns;
    }
    public get secondaryDns() {
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
    public set extraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOption> | undefined) {
        this['extra_dhcp_opts'] = extraDhcpOpts;
    }
    public get extraDhcpOpts() {
        return this['extra_dhcp_opts'];
    }
}