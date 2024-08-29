import { AllowedAddressPair } from './AllowedAddressPair';
import { ExtraDhcpOpt } from './ExtraDhcpOpt';
import { PrivateIpInfo } from './PrivateIpInfo';


export class Port {
    private 'admin_state_up'?: boolean;
    private 'binding:host_id'?: string;
    private 'binding:profile'?: object;
    private 'binding:vif_details'?: object;
    private 'binding:vif_type'?: string;
    private 'binding:vnic_type'?: string;
    private 'created_at'?: Date;
    private 'updated_at'?: Date;
    public description?: string;
    private 'device_id'?: string;
    private 'device_owner'?: string;
    private 'ecs_flavor'?: string;
    public id?: string;
    private 'instance_id'?: string;
    private 'instance_type'?: string;
    private 'mac_address'?: string;
    public name?: string;
    private 'port_security_enabled'?: boolean;
    private 'private_ips'?: Array<PrivateIpInfo>;
    private 'project_id'?: string;
    private 'security_groups'?: Array<string>;
    public status?: string;
    private 'tenant_id'?: string;
    private 'virsubnet_id'?: string;
    private 'vpc_id'?: string;
    private 'vpc_tenant_id'?: string;
    private 'vtep_ip'?: string;
    private 'enable_efi'?: boolean;
    public scope?: string;
    private 'zone_id'?: string;
    private 'binding:migration_info'?: object;
    private 'extra_dhcp_opts'?: Array<ExtraDhcpOpt>;
    private 'position_type'?: string;
    private 'instance_info'?: object;
    public tags?: Array<string>;
    private 'allowed_address_pairs'?: Array<AllowedAddressPair>;
    public constructor(adminStateUp?: boolean, bindingHostId?: string, bindingProfile?: object, bindingVifDetails?: object, bindingVifType?: string, bindingVnicType?: string, createdAt?: Date, updatedAt?: Date, description?: string, deviceId?: string, deviceOwner?: string, ecsFlavor?: string, id?: string, instanceId?: string, instanceType?: string, macAddress?: string, name?: string, portSecurityEnabled?: boolean, privateIps?: Array<PrivateIpInfo>, projectId?: string, securityGroups?: Array<string>, status?: string, tenantId?: string, virsubnetId?: string, vpcId?: string, vpcTenantId?: string, vtepIp?: string, enableEfi?: boolean, scope?: string, zoneId?: string, bindingMigrationInfo?: object, extraDhcpOpts?: Array<ExtraDhcpOpt>, positionType?: string, instanceInfo?: object, tags?: Array<string>, allowedAddressPairs?: Array<AllowedAddressPair>) { 
        this['admin_state_up'] = adminStateUp;
        this['binding:host_id'] = bindingHostId;
        this['binding:profile'] = bindingProfile;
        this['binding:vif_details'] = bindingVifDetails;
        this['binding:vif_type'] = bindingVifType;
        this['binding:vnic_type'] = bindingVnicType;
        this['created_at'] = createdAt;
        this['updated_at'] = updatedAt;
        this['description'] = description;
        this['device_id'] = deviceId;
        this['device_owner'] = deviceOwner;
        this['ecs_flavor'] = ecsFlavor;
        this['id'] = id;
        this['instance_id'] = instanceId;
        this['instance_type'] = instanceType;
        this['mac_address'] = macAddress;
        this['name'] = name;
        this['port_security_enabled'] = portSecurityEnabled;
        this['private_ips'] = privateIps;
        this['project_id'] = projectId;
        this['security_groups'] = securityGroups;
        this['status'] = status;
        this['tenant_id'] = tenantId;
        this['virsubnet_id'] = virsubnetId;
        this['vpc_id'] = vpcId;
        this['vpc_tenant_id'] = vpcTenantId;
        this['vtep_ip'] = vtepIp;
        this['enable_efi'] = enableEfi;
        this['scope'] = scope;
        this['zone_id'] = zoneId;
        this['binding:migration_info'] = bindingMigrationInfo;
        this['extra_dhcp_opts'] = extraDhcpOpts;
        this['position_type'] = positionType;
        this['instance_info'] = instanceInfo;
        this['tags'] = tags;
        this['allowed_address_pairs'] = allowedAddressPairs;
    }
    public withAdminStateUp(adminStateUp: boolean): Port {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withBindingHostId(bindingHostId: string): Port {
        this['binding:host_id'] = bindingHostId;
        return this;
    }
    public set bindingHostId(bindingHostId: string  | undefined) {
        this['binding:host_id'] = bindingHostId;
    }
    public get bindingHostId(): string | undefined {
        return this['binding:host_id'];
    }
    public withBindingProfile(bindingProfile: object): Port {
        this['binding:profile'] = bindingProfile;
        return this;
    }
    public set bindingProfile(bindingProfile: object  | undefined) {
        this['binding:profile'] = bindingProfile;
    }
    public get bindingProfile(): object | undefined {
        return this['binding:profile'];
    }
    public withBindingVifDetails(bindingVifDetails: object): Port {
        this['binding:vif_details'] = bindingVifDetails;
        return this;
    }
    public set bindingVifDetails(bindingVifDetails: object  | undefined) {
        this['binding:vif_details'] = bindingVifDetails;
    }
    public get bindingVifDetails(): object | undefined {
        return this['binding:vif_details'];
    }
    public withBindingVifType(bindingVifType: string): Port {
        this['binding:vif_type'] = bindingVifType;
        return this;
    }
    public set bindingVifType(bindingVifType: string  | undefined) {
        this['binding:vif_type'] = bindingVifType;
    }
    public get bindingVifType(): string | undefined {
        return this['binding:vif_type'];
    }
    public withBindingVnicType(bindingVnicType: string): Port {
        this['binding:vnic_type'] = bindingVnicType;
        return this;
    }
    public set bindingVnicType(bindingVnicType: string  | undefined) {
        this['binding:vnic_type'] = bindingVnicType;
    }
    public get bindingVnicType(): string | undefined {
        return this['binding:vnic_type'];
    }
    public withCreatedAt(createdAt: Date): Port {
        this['created_at'] = createdAt;
        return this;
    }
    public set createdAt(createdAt: Date  | undefined) {
        this['created_at'] = createdAt;
    }
    public get createdAt(): Date | undefined {
        return this['created_at'];
    }
    public withUpdatedAt(updatedAt: Date): Port {
        this['updated_at'] = updatedAt;
        return this;
    }
    public set updatedAt(updatedAt: Date  | undefined) {
        this['updated_at'] = updatedAt;
    }
    public get updatedAt(): Date | undefined {
        return this['updated_at'];
    }
    public withDescription(description: string): Port {
        this['description'] = description;
        return this;
    }
    public withDeviceId(deviceId: string): Port {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withDeviceOwner(deviceOwner: string): Port {
        this['device_owner'] = deviceOwner;
        return this;
    }
    public set deviceOwner(deviceOwner: string  | undefined) {
        this['device_owner'] = deviceOwner;
    }
    public get deviceOwner(): string | undefined {
        return this['device_owner'];
    }
    public withEcsFlavor(ecsFlavor: string): Port {
        this['ecs_flavor'] = ecsFlavor;
        return this;
    }
    public set ecsFlavor(ecsFlavor: string  | undefined) {
        this['ecs_flavor'] = ecsFlavor;
    }
    public get ecsFlavor(): string | undefined {
        return this['ecs_flavor'];
    }
    public withId(id: string): Port {
        this['id'] = id;
        return this;
    }
    public withInstanceId(instanceId: string): Port {
        this['instance_id'] = instanceId;
        return this;
    }
    public set instanceId(instanceId: string  | undefined) {
        this['instance_id'] = instanceId;
    }
    public get instanceId(): string | undefined {
        return this['instance_id'];
    }
    public withInstanceType(instanceType: string): Port {
        this['instance_type'] = instanceType;
        return this;
    }
    public set instanceType(instanceType: string  | undefined) {
        this['instance_type'] = instanceType;
    }
    public get instanceType(): string | undefined {
        return this['instance_type'];
    }
    public withMacAddress(macAddress: string): Port {
        this['mac_address'] = macAddress;
        return this;
    }
    public set macAddress(macAddress: string  | undefined) {
        this['mac_address'] = macAddress;
    }
    public get macAddress(): string | undefined {
        return this['mac_address'];
    }
    public withName(name: string): Port {
        this['name'] = name;
        return this;
    }
    public withPortSecurityEnabled(portSecurityEnabled: boolean): Port {
        this['port_security_enabled'] = portSecurityEnabled;
        return this;
    }
    public set portSecurityEnabled(portSecurityEnabled: boolean  | undefined) {
        this['port_security_enabled'] = portSecurityEnabled;
    }
    public get portSecurityEnabled(): boolean | undefined {
        return this['port_security_enabled'];
    }
    public withPrivateIps(privateIps: Array<PrivateIpInfo>): Port {
        this['private_ips'] = privateIps;
        return this;
    }
    public set privateIps(privateIps: Array<PrivateIpInfo>  | undefined) {
        this['private_ips'] = privateIps;
    }
    public get privateIps(): Array<PrivateIpInfo> | undefined {
        return this['private_ips'];
    }
    public withProjectId(projectId: string): Port {
        this['project_id'] = projectId;
        return this;
    }
    public set projectId(projectId: string  | undefined) {
        this['project_id'] = projectId;
    }
    public get projectId(): string | undefined {
        return this['project_id'];
    }
    public withSecurityGroups(securityGroups: Array<string>): Port {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<string> | undefined {
        return this['security_groups'];
    }
    public withStatus(status: string): Port {
        this['status'] = status;
        return this;
    }
    public withTenantId(tenantId: string): Port {
        this['tenant_id'] = tenantId;
        return this;
    }
    public set tenantId(tenantId: string  | undefined) {
        this['tenant_id'] = tenantId;
    }
    public get tenantId(): string | undefined {
        return this['tenant_id'];
    }
    public withVirsubnetId(virsubnetId: string): Port {
        this['virsubnet_id'] = virsubnetId;
        return this;
    }
    public set virsubnetId(virsubnetId: string  | undefined) {
        this['virsubnet_id'] = virsubnetId;
    }
    public get virsubnetId(): string | undefined {
        return this['virsubnet_id'];
    }
    public withVpcId(vpcId: string): Port {
        this['vpc_id'] = vpcId;
        return this;
    }
    public set vpcId(vpcId: string  | undefined) {
        this['vpc_id'] = vpcId;
    }
    public get vpcId(): string | undefined {
        return this['vpc_id'];
    }
    public withVpcTenantId(vpcTenantId: string): Port {
        this['vpc_tenant_id'] = vpcTenantId;
        return this;
    }
    public set vpcTenantId(vpcTenantId: string  | undefined) {
        this['vpc_tenant_id'] = vpcTenantId;
    }
    public get vpcTenantId(): string | undefined {
        return this['vpc_tenant_id'];
    }
    public withVtepIp(vtepIp: string): Port {
        this['vtep_ip'] = vtepIp;
        return this;
    }
    public set vtepIp(vtepIp: string  | undefined) {
        this['vtep_ip'] = vtepIp;
    }
    public get vtepIp(): string | undefined {
        return this['vtep_ip'];
    }
    public withEnableEfi(enableEfi: boolean): Port {
        this['enable_efi'] = enableEfi;
        return this;
    }
    public set enableEfi(enableEfi: boolean  | undefined) {
        this['enable_efi'] = enableEfi;
    }
    public get enableEfi(): boolean | undefined {
        return this['enable_efi'];
    }
    public withScope(scope: string): Port {
        this['scope'] = scope;
        return this;
    }
    public withZoneId(zoneId: string): Port {
        this['zone_id'] = zoneId;
        return this;
    }
    public set zoneId(zoneId: string  | undefined) {
        this['zone_id'] = zoneId;
    }
    public get zoneId(): string | undefined {
        return this['zone_id'];
    }
    public withBindingMigrationInfo(bindingMigrationInfo: object): Port {
        this['binding:migration_info'] = bindingMigrationInfo;
        return this;
    }
    public set bindingMigrationInfo(bindingMigrationInfo: object  | undefined) {
        this['binding:migration_info'] = bindingMigrationInfo;
    }
    public get bindingMigrationInfo(): object | undefined {
        return this['binding:migration_info'];
    }
    public withExtraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOpt>): Port {
        this['extra_dhcp_opts'] = extraDhcpOpts;
        return this;
    }
    public set extraDhcpOpts(extraDhcpOpts: Array<ExtraDhcpOpt>  | undefined) {
        this['extra_dhcp_opts'] = extraDhcpOpts;
    }
    public get extraDhcpOpts(): Array<ExtraDhcpOpt> | undefined {
        return this['extra_dhcp_opts'];
    }
    public withPositionType(positionType: string): Port {
        this['position_type'] = positionType;
        return this;
    }
    public set positionType(positionType: string  | undefined) {
        this['position_type'] = positionType;
    }
    public get positionType(): string | undefined {
        return this['position_type'];
    }
    public withInstanceInfo(instanceInfo: object): Port {
        this['instance_info'] = instanceInfo;
        return this;
    }
    public set instanceInfo(instanceInfo: object  | undefined) {
        this['instance_info'] = instanceInfo;
    }
    public get instanceInfo(): object | undefined {
        return this['instance_info'];
    }
    public withTags(tags: Array<string>): Port {
        this['tags'] = tags;
        return this;
    }
    public withAllowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair>): Port {
        this['allowed_address_pairs'] = allowedAddressPairs;
        return this;
    }
    public set allowedAddressPairs(allowedAddressPairs: Array<AllowedAddressPair>  | undefined) {
        this['allowed_address_pairs'] = allowedAddressPairs;
    }
    public get allowedAddressPairs(): Array<AllowedAddressPair> | undefined {
        return this['allowed_address_pairs'];
    }
}