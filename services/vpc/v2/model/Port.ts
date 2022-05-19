import { AllowedAddressPair } from './AllowedAddressPair';
import { BindingVifDetails } from './BindingVifDetails';
import { DnsAssignMent } from './DnsAssignMent';
import { ExtraDhcpOpt } from './ExtraDhcpOpt';
import { FixedIp } from './FixedIp';


export class Port {
    public id: string;
    public name: string;
    private 'network_id': string | undefined;
    private 'admin_state_up': boolean | undefined;
    private 'mac_address': string | undefined;
    private 'fixed_ips': Array<FixedIp> | undefined;
    private 'device_id': string | undefined;
    private 'device_owner': PortDeviceOwnerEnum | undefined;
    private 'tenant_id': string | undefined;
    public status: PortStatusEnum;
    private 'security_groups': Array<string> | undefined;
    private 'allowed_address_pairs': Array<AllowedAddressPair> | undefined;
    private 'extra_dhcp_opts': Array<ExtraDhcpOpt> | undefined;
    private 'binding:vnic_type': string | undefined;
    private 'dns_assignment': Array<DnsAssignMent> | undefined;
    private 'dns_name': string | undefined;
    private 'binding:vif_details': BindingVifDetails | undefined;
    private 'binding:profile': object | undefined;
    private 'instance_id': string | undefined;
    private 'instance_type': string | undefined;
    private 'port_security_enabled': boolean | undefined;
    private 'zone_id': string | undefined;
    public constructor(id?: any, name?: any, networkId?: any, adminStateUp?: any, macAddress?: any, fixedIps?: any, deviceId?: any, deviceOwner?: any, tenantId?: any, status?: any, securityGroups?: any, allowedAddressPairs?: any, extraDhcpOpts?: any, bindingVnicType?: any, dnsAssignment?: any, dnsName?: any, bindingVifDetails?: any, bindingProfile?: any, instanceId?: any, instanceType?: any, portSecurityEnabled?: any, zoneId?: any) { 
        this['id'] = id;
        this['name'] = name;
        this['network_id'] = networkId;
        this['admin_state_up'] = adminStateUp;
        this['mac_address'] = macAddress;
        this['fixed_ips'] = fixedIps;
        this['device_id'] = deviceId;
        this['device_owner'] = deviceOwner;
        this['tenant_id'] = tenantId;
        this['status'] = status;
        this['security_groups'] = securityGroups;
        this['allowed_address_pairs'] = allowedAddressPairs;
        this['extra_dhcp_opts'] = extraDhcpOpts;
        this['binding:vnic_type'] = bindingVnicType;
        this['dns_assignment'] = dnsAssignment;
        this['dns_name'] = dnsName;
        this['binding:vif_details'] = bindingVifDetails;
        this['binding:profile'] = bindingProfile;
        this['instance_id'] = instanceId;
        this['instance_type'] = instanceType;
        this['port_security_enabled'] = portSecurityEnabled;
        this['zone_id'] = zoneId;
    }
    public withId(id: string): Port {
        this['id'] = id;
        return this;
    }
    public withName(name: string): Port {
        this['name'] = name;
        return this;
    }
    public withNetworkId(networkId: string): Port {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId() {
        return this['network_id'];
    }
    public withAdminStateUp(adminStateUp: boolean): Port {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withMacAddress(macAddress: string): Port {
        this['mac_address'] = macAddress;
        return this;
    }
    public set macAddress(macAddress: string | undefined) {
        this['mac_address'] = macAddress;
    }
    public get macAddress() {
        return this['mac_address'];
    }
    public withFixedIps(fixedIps: Array<FixedIp>): Port {
        this['fixed_ips'] = fixedIps;
        return this;
    }
    public set fixedIps(fixedIps: Array<FixedIp> | undefined) {
        this['fixed_ips'] = fixedIps;
    }
    public get fixedIps() {
        return this['fixed_ips'];
    }
    public withDeviceId(deviceId: string): Port {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withDeviceOwner(deviceOwner: PortDeviceOwnerEnum): Port {
        this['device_owner'] = deviceOwner;
        return this;
    }
    public set deviceOwner(deviceOwner: PortDeviceOwnerEnum | undefined) {
        this['device_owner'] = deviceOwner;
    }
    public get deviceOwner() {
        return this['device_owner'];
    }
    public withTenantId(tenantId: string): Port {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId() {
        return this['tenant_id'];
    }
    public withStatus(status: PortStatusEnum): Port {
        this['status'] = status;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<string>): Port {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string> | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups() {
        return this['security_groups'];
    }
    public withAllowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair>): Port {
        this['allowed_address_pairs'] = allowedAddressPairs;
        return this;
    }
    public set allowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair> | undefined) {
        this['allowed_address_pairs'] = allowedAddressPairs;
    }
    public get allowedAddressPairs() {
        return this['allowed_address_pairs'];
    }
    public withExtraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOpt>): Port {
        this['extra_dhcp_opts'] = extraDhcpOpts;
        return this;
    }
    public set extraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOpt> | undefined) {
        this['extra_dhcp_opts'] = extraDhcpOpts;
    }
    public get extraDhcpOpts() {
        return this['extra_dhcp_opts'];
    }
    public withBindingVnicType(bindingVnicType: string): Port {
        this['binding:vnic_type'] = bindingVnicType;
        return this;
    }
    public set bindingVnicType(bindingVnicType: string | undefined) {
        this['binding:vnic_type'] = bindingVnicType;
    }
    public get bindingVnicType() {
        return this['binding:vnic_type'];
    }
    public withDnsAssignment(dnsAssignment: Array<DnsAssignMent>): Port {
        this['dns_assignment'] = dnsAssignment;
        return this;
    }
    public set dnsAssignment(dnsAssignment: Array<DnsAssignMent> | undefined) {
        this['dns_assignment'] = dnsAssignment;
    }
    public get dnsAssignment() {
        return this['dns_assignment'];
    }
    public withDnsName(dnsName: string): Port {
        this['dns_name'] = dnsName;
        return this;
    }
    public set dnsName(dnsName: string | undefined) {
        this['dns_name'] = dnsName;
    }
    public get dnsName() {
        return this['dns_name'];
    }
    public withBindingVifDetails(bindingVifDetails: BindingVifDetails): Port {
        this['binding:vif_details'] = bindingVifDetails;
        return this;
    }
    public set bindingVifDetails(bindingVifDetails: BindingVifDetails | undefined) {
        this['binding:vif_details'] = bindingVifDetails;
    }
    public get bindingVifDetails() {
        return this['binding:vif_details'];
    }
    public withBindingProfile(bindingProfile: object): Port {
        this['binding:profile'] = bindingProfile;
        return this;
    }
    public set bindingProfile(bindingProfile: object | undefined) {
        this['binding:profile'] = bindingProfile;
    }
    public get bindingProfile() {
        return this['binding:profile'];
    }
    public withInstanceId(instanceId: string): Port {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId() {
        return this['instance_id'];
    }
    public withInstanceType(instanceType: string): Port {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType() {
        return this['instance_type'];
    }
    public withPortSecurityEnabled(portSecurityEnabled: boolean): Port {
        this['port_security_enabled'] = portSecurityEnabled;
        return this;
    }
    public set portSecurityEnabled(portSecurityEnabled: boolean | undefined) {
        this['port_security_enabled'] = portSecurityEnabled;
    }
    public get portSecurityEnabled() {
        return this['port_security_enabled'];
    }
    public withZoneId(zoneId: string): Port {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId() {
        return this['zone_id'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum PortDeviceOwnerEnum {
    NETWORKDHCP = 'network:dhcp',
    NEUTRONVIP_PORT = 'neutron:VIP_PORT',
    NETWORKROUTER_INTERFACE_DISTRIBUTED = 'network:router_interface_distributed',
    NETWORKROUTER_CENTRALIZED_SNAT = 'network:router_centralized_snat'
}
/**
    * @export
    * @enum {string}
    */
export enum PortStatusEnum {
    ACTIVE = 'ACTIVE',
    BUILD = 'BUILD',
    DOWN = 'DOWN'
}
