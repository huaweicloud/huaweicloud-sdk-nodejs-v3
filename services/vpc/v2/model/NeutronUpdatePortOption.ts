import { AllowedAddressPair } from './AllowedAddressPair';
import { ExtraDhcpOpt } from './ExtraDhcpOpt';


export class NeutronUpdatePortOption {
    public name?: string;
    private 'security_groups'?: Array<string> | undefined;
    private 'allowed_address_pairs'?: Array<AllowedAddressPair> | undefined;
    private 'extra_dhcp_opts'?: Array<ExtraDhcpOpt> | undefined;
    private 'port_security_enabled'?: boolean | undefined;
    private 'binding:vnic_type'?: string | undefined;
    private 'binding:profile'?: { [key: string]: object; } | undefined;
    public constructor() { 
    }
    public withName(name: string): NeutronUpdatePortOption {
        this['name'] = name;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<string>): NeutronUpdatePortOption {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string> | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups() {
        return this['security_groups'];
    }
    public withAllowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair>): NeutronUpdatePortOption {
        this['allowed_address_pairs'] = allowedAddressPairs;
        return this;
    }
    public set allowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair> | undefined) {
        this['allowed_address_pairs'] = allowedAddressPairs;
    }
    public get allowedAddressPairs() {
        return this['allowed_address_pairs'];
    }
    public withExtraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOpt>): NeutronUpdatePortOption {
        this['extra_dhcp_opts'] = extraDhcpOpts;
        return this;
    }
    public set extraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOpt> | undefined) {
        this['extra_dhcp_opts'] = extraDhcpOpts;
    }
    public get extraDhcpOpts() {
        return this['extra_dhcp_opts'];
    }
    public withPortSecurityEnabled(portSecurityEnabled: boolean): NeutronUpdatePortOption {
        this['port_security_enabled'] = portSecurityEnabled;
        return this;
    }
    public set portSecurityEnabled(portSecurityEnabled: boolean | undefined) {
        this['port_security_enabled'] = portSecurityEnabled;
    }
    public get portSecurityEnabled() {
        return this['port_security_enabled'];
    }
    public withBindingVnicType(bindingVnicType: string): NeutronUpdatePortOption {
        this['binding:vnic_type'] = bindingVnicType;
        return this;
    }
    public set bindingVnicType(bindingVnicType: string | undefined) {
        this['binding:vnic_type'] = bindingVnicType;
    }
    public get bindingVnicType() {
        return this['binding:vnic_type'];
    }
    public withBindingProfile(bindingProfile: { [key: string]: object; }): NeutronUpdatePortOption {
        this['binding:profile'] = bindingProfile;
        return this;
    }
    public set bindingProfile(bindingProfile: { [key: string]: object; } | undefined) {
        this['binding:profile'] = bindingProfile;
    }
    public get bindingProfile() {
        return this['binding:profile'];
    }
}