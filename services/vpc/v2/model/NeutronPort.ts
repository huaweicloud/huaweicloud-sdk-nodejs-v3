import { AllowedAddressPair } from './AllowedAddressPair';
import { BindingVifDetails } from './BindingVifDetails';
import { DnsAssignMent } from './DnsAssignMent';
import { ExtraDhcpOpt } from './ExtraDhcpOpt';
import { FixedIp } from './FixedIp';


export class NeutronPort {
    private 'admin_state_up'?: boolean;
    private 'allowed_address_pairs'?: Array<AllowedAddressPair>;
    private 'binding:profile'?: object;
    private 'binding:vif_details'?: BindingVifDetails;
    private 'binding:vnic_type'?: string;
    private 'device_id'?: string;
    private 'device_owner'?: string;
    private 'dns_assignment'?: Array<DnsAssignMent>;
    private 'dns_name'?: string;
    private 'extra_dhcp_opts'?: Array<ExtraDhcpOpt>;
    private 'fixed_ips'?: Array<FixedIp>;
    public id?: string;
    private 'mac_address'?: string;
    public name?: string;
    private 'network_id'?: string;
    private 'port_security_enabled'?: boolean;
    private 'security_groups'?: Array<string>;
    public status?: string;
    private 'tenant_id'?: string;
    private 'project_id'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public constructor(adminStateUp?: boolean, allowedAddressPairs?: Array<AllowedAddressPair>, bindingProfile?: object, bindingVifDetails?: BindingVifDetails, bindingVnicType?: string, deviceId?: string, deviceOwner?: string, dnsAssignment?: Array<DnsAssignMent>, dnsName?: string, extraDhcpOpts?: Array<ExtraDhcpOpt>, fixedIps?: Array<FixedIp>, id?: string, macAddress?: string, name?: string, networkId?: string, portSecurityEnabled?: boolean, securityGroups?: Array<string>, status?: string, tenantId?: string, projectId?: string, createdAt?: Date, updatedAt?: Date) { 
        this['admin_state_up'] = adminStateUp;
        this['allowed_address_pairs'] = allowedAddressPairs;
        this['binding:profile'] = bindingProfile;
        this['binding:vif_details'] = bindingVifDetails;
        this['binding:vnic_type'] = bindingVnicType;
        this['device_id'] = deviceId;
        this['device_owner'] = deviceOwner;
        this['dns_assignment'] = dnsAssignment;
        this['dns_name'] = dnsName;
        this['extra_dhcp_opts'] = extraDhcpOpts;
        this['fixed_ips'] = fixedIps;
        this['id'] = id;
        this['mac_address'] = macAddress;
        this['name'] = name;
        this['network_id'] = networkId;
        this['port_security_enabled'] = portSecurityEnabled;
        this['security_groups'] = securityGroups;
        this['status'] = status;
        this['tenant_id'] = tenantId;
        this['project_id'] = projectId;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
    }
    public withAdminStateUp(adminStateUp: boolean): NeutronPort {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withAllowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair>): NeutronPort {
        this['allowed_address_pairs'] = allowedAddressPairs;
        return this;
    }
    public set allowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair>  | undefined) {
        this['allowed_address_pairs'] = allowedAddressPairs;
    }
    public get allowedAddressPairs(): Array<AllowedAddressPair> | undefined {
        return this['allowed_address_pairs'];
    }
    public withBindingProfile(bindingProfile: object): NeutronPort {
        this['binding:profile'] = bindingProfile;
        return this;
    }
    public set bindingProfile(bindingProfile: object  | undefined) {
        this['binding:profile'] = bindingProfile;
    }
    public get bindingProfile(): object | undefined {
        return this['binding:profile'];
    }
    public withBindingVifDetails(bindingVifDetails: BindingVifDetails): NeutronPort {
        this['binding:vif_details'] = bindingVifDetails;
        return this;
    }
    public set bindingVifDetails(bindingVifDetails: BindingVifDetails  | undefined) {
        this['binding:vif_details'] = bindingVifDetails;
    }
    public get bindingVifDetails(): BindingVifDetails | undefined {
        return this['binding:vif_details'];
    }
    public withBindingVnicType(bindingVnicType: string): NeutronPort {
        this['binding:vnic_type'] = bindingVnicType;
        return this;
    }
    public set bindingVnicType(bindingVnicType: string  | undefined) {
        this['binding:vnic_type'] = bindingVnicType;
    }
    public get bindingVnicType(): string | undefined {
        return this['binding:vnic_type'];
    }
    public withDeviceId(deviceId: string): NeutronPort {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withDeviceOwner(deviceOwner: string): NeutronPort {
        this['device_owner'] = deviceOwner;
        return this;
    }
    public set deviceOwner(deviceOwner: string  | undefined) {
        this['device_owner'] = deviceOwner;
    }
    public get deviceOwner(): string | undefined {
        return this['device_owner'];
    }
    public withDnsAssignment(dnsAssignment: Array<DnsAssignMent>): NeutronPort {
        this['dns_assignment'] = dnsAssignment;
        return this;
    }
    public set dnsAssignment(dnsAssignment: Array<DnsAssignMent>  | undefined) {
        this['dns_assignment'] = dnsAssignment;
    }
    public get dnsAssignment(): Array<DnsAssignMent> | undefined {
        return this['dns_assignment'];
    }
    public withDnsName(dnsName: string): NeutronPort {
        this['dns_name'] = dnsName;
        return this;
    }
    public set dnsName(dnsName: string  | undefined) {
        this['dns_name'] = dnsName;
    }
    public get dnsName(): string | undefined {
        return this['dns_name'];
    }
    public withExtraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOpt>): NeutronPort {
        this['extra_dhcp_opts'] = extraDhcpOpts;
        return this;
    }
    public set extraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOpt>  | undefined) {
        this['extra_dhcp_opts'] = extraDhcpOpts;
    }
    public get extraDhcpOpts(): Array<ExtraDhcpOpt> | undefined {
        return this['extra_dhcp_opts'];
    }
    public withFixedIps(fixedIps: Array<FixedIp>): NeutronPort {
        this['fixed_ips'] = fixedIps;
        return this;
    }
    public set fixedIps(fixedIps: Array<FixedIp>  | undefined) {
        this['fixed_ips'] = fixedIps;
    }
    public get fixedIps(): Array<FixedIp> | undefined {
        return this['fixed_ips'];
    }
    public withId(id: string): NeutronPort {
        this['id'] = id;
        return this;
    }
    public withMacAddress(macAddress: string): NeutronPort {
        this['mac_address'] = macAddress;
        return this;
    }
    public set macAddress(macAddress: string  | undefined) {
        this['mac_address'] = macAddress;
    }
    public get macAddress(): string | undefined {
        return this['mac_address'];
    }
    public withName(name: string): NeutronPort {
        this['name'] = name;
        return this;
    }
    public withNetworkId(networkId: string): NeutronPort {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string  | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId(): string | undefined {
        return this['network_id'];
    }
    public withPortSecurityEnabled(portSecurityEnabled: boolean): NeutronPort {
        this['port_security_enabled'] = portSecurityEnabled;
        return this;
    }
    public set portSecurityEnabled(portSecurityEnabled: boolean  | undefined) {
        this['port_security_enabled'] = portSecurityEnabled;
    }
    public get portSecurityEnabled(): boolean | undefined {
        return this['port_security_enabled'];
    }
    public withSecurityGroups(securityGroups: Array<string>): NeutronPort {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<string> | undefined {
        return this['security_groups'];
    }
    public withStatus(status: string): NeutronPort {
        this['status'] = status;
        return this;
    }
    public withTenantId(tenantId: string): NeutronPort {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withProjectId(projectId: string): NeutronPort {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withCreatedAt(createdAt: Date): NeutronPort {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): NeutronPort {
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