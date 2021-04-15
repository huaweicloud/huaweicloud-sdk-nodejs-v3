import { AllowedAddressPair } from './AllowedAddressPair';
import { ExtraDhcpOpt } from './ExtraDhcpOpt';
import { FixedIp } from './FixedIp';


export class CreatePortOption {
    public name?: string;
    private 'network_id': string | undefined;
    private 'fixed_ips'?: Array<FixedIp> | undefined;
    private 'device_owner'?: string | undefined;
    private 'security_groups'?: Array<string> | undefined;
    private 'admin_state_up'?: boolean | undefined;
    private 'allowed_address_pairs'?: Array<AllowedAddressPair> | undefined;
    private 'extra_dhcp_opts'?: Array<ExtraDhcpOpt> | undefined;
    private 'tenant_id'?: string | undefined;
    public constructor(networkId?: any) { 
        this['network_id'] = networkId;
    }
    public withName(name: string): CreatePortOption {
        this['name'] = name;
        return this;
    }
    public withNetworkId(networkId: string): CreatePortOption {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId() {
        return this['network_id'];
    }
    public withFixedIps(fixedIps: Array<FixedIp>): CreatePortOption {
        this['fixed_ips'] = fixedIps;
        return this;
    }
    public set fixedIps(fixedIps: Array<FixedIp> | undefined) {
        this['fixed_ips'] = fixedIps;
    }
    public get fixedIps() {
        return this['fixed_ips'];
    }
    public withDeviceOwner(deviceOwner: string): CreatePortOption {
        this['device_owner'] = deviceOwner;
        return this;
    }
    public set deviceOwner(deviceOwner: string | undefined) {
        this['device_owner'] = deviceOwner;
    }
    public get deviceOwner() {
        return this['device_owner'];
    }
    public withSecurityGroups(securityGroups: Array<string>): CreatePortOption {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string> | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups() {
        return this['security_groups'];
    }
    public withAdminStateUp(adminStateUp: boolean): CreatePortOption {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withAllowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair>): CreatePortOption {
        this['allowed_address_pairs'] = allowedAddressPairs;
        return this;
    }
    public set allowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair> | undefined) {
        this['allowed_address_pairs'] = allowedAddressPairs;
    }
    public get allowedAddressPairs() {
        return this['allowed_address_pairs'];
    }
    public withExtraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOpt>): CreatePortOption {
        this['extra_dhcp_opts'] = extraDhcpOpts;
        return this;
    }
    public set extraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOpt> | undefined) {
        this['extra_dhcp_opts'] = extraDhcpOpts;
    }
    public get extraDhcpOpts() {
        return this['extra_dhcp_opts'];
    }
    public withTenantId(tenantId: string): CreatePortOption {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
}