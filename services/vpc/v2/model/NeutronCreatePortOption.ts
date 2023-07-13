import { AllowedAddressPair } from './AllowedAddressPair';
import { ExtraDhcpOpt } from './ExtraDhcpOpt';
import { FixedIp } from './FixedIp';


export class NeutronCreatePortOption {
    public name?: string;
    private 'network_id': string | undefined;
    private 'admin_state_up'?: boolean | undefined;
    private 'fixed_ips'?: Array<FixedIp> | undefined;
    private 'security_groups'?: Array<string> | undefined;
    private 'device_owner'?: string | undefined;
    private 'allowed_address_pairs'?: Array<AllowedAddressPair> | undefined;
    private 'extra_dhcp_opts'?: Array<ExtraDhcpOpt> | undefined;
    private 'binding:profile'?: { [key: string]: object; } | undefined;
    private 'port_security_enabled'?: boolean | undefined;
    private 'binding:vnic_type'?: string | undefined;
    public constructor(networkId?: any) { 
        this['network_id'] = networkId;
    }
    public withName(name: string): NeutronCreatePortOption {
        this['name'] = name;
        return this;
    }
    public withNetworkId(networkId: string): NeutronCreatePortOption {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId() {
        return this['network_id'];
    }
    public withAdminStateUp(adminStateUp: boolean): NeutronCreatePortOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withFixedIps(fixedIps: Array<FixedIp>): NeutronCreatePortOption {
        this['fixed_ips'] = fixedIps;
        return this;
    }
    public set fixedIps(fixedIps: Array<FixedIp> | undefined) {
        this['fixed_ips'] = fixedIps;
    }
    public get fixedIps() {
        return this['fixed_ips'];
    }
    public withSecurityGroups(securityGroups: Array<string>): NeutronCreatePortOption {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string> | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups() {
        return this['security_groups'];
    }
    public withDeviceOwner(deviceOwner: string): NeutronCreatePortOption {
        this['device_owner'] = deviceOwner;
        return this;
    }
    public set deviceOwner(deviceOwner: string | undefined) {
        this['device_owner'] = deviceOwner;
    }
    public get deviceOwner() {
        return this['device_owner'];
    }
    public withAllowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair>): NeutronCreatePortOption {
        this['allowed_address_pairs'] = allowedAddressPairs;
        return this;
    }
    public set allowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair> | undefined) {
        this['allowed_address_pairs'] = allowedAddressPairs;
    }
    public get allowedAddressPairs() {
        return this['allowed_address_pairs'];
    }
    public withExtraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOpt>): NeutronCreatePortOption {
        this['extra_dhcp_opts'] = extraDhcpOpts;
        return this;
    }
    public set extraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOpt> | undefined) {
        this['extra_dhcp_opts'] = extraDhcpOpts;
    }
    public get extraDhcpOpts() {
        return this['extra_dhcp_opts'];
    }
    public withBindingProfile(bindingProfile: { [key: string]: object; }): NeutronCreatePortOption {
        this['binding:profile'] = bindingProfile;
        return this;
    }
    public set bindingProfile(bindingProfile: { [key: string]: object; } | undefined) {
        this['binding:profile'] = bindingProfile;
    }
    public get bindingProfile() {
        return this['binding:profile'];
    }
    public withPortSecurityEnabled(portSecurityEnabled: boolean): NeutronCreatePortOption {
        this['port_security_enabled'] = portSecurityEnabled;
        return this;
    }
    public set portSecurityEnabled(portSecurityEnabled: boolean | undefined) {
        this['port_security_enabled'] = portSecurityEnabled;
    }
    public get portSecurityEnabled() {
        return this['port_security_enabled'];
    }
    public withBindingVnicType(bindingVnicType: string): NeutronCreatePortOption {
        this['binding:vnic_type'] = bindingVnicType;
        return this;
    }
    public set bindingVnicType(bindingVnicType: string | undefined) {
        this['binding:vnic_type'] = bindingVnicType;
    }
    public get bindingVnicType() {
        return this['binding:vnic_type'];
    }
}