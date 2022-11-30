import { AllowedAddressPair } from './AllowedAddressPair';
import { ExtraDhcpOpt } from './ExtraDhcpOpt';


export class UpdatePortOption {
    public name?: string;
    private 'security_groups'?: Array<string> | undefined;
    private 'allowed_address_pairs'?: Array<AllowedAddressPair> | undefined;
    private 'extra_dhcp_opts'?: Array<ExtraDhcpOpt> | undefined;
    public constructor() { 
    }
    public withName(name: string): UpdatePortOption {
        this['name'] = name;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<string>): UpdatePortOption {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string> | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups() {
        return this['security_groups'];
    }
    public withAllowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair>): UpdatePortOption {
        this['allowed_address_pairs'] = allowedAddressPairs;
        return this;
    }
    public set allowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair> | undefined) {
        this['allowed_address_pairs'] = allowedAddressPairs;
    }
    public get allowedAddressPairs() {
        return this['allowed_address_pairs'];
    }
    public withExtraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOpt>): UpdatePortOption {
        this['extra_dhcp_opts'] = extraDhcpOpts;
        return this;
    }
    public set extraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOpt> | undefined) {
        this['extra_dhcp_opts'] = extraDhcpOpts;
    }
    public get extraDhcpOpts() {
        return this['extra_dhcp_opts'];
    }
}