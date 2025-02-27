

export class ListPortsRequest {
    public name?: string;
    public id?: Array<string>;
    public limit?: number;
    private 'admin_state_up'?: boolean;
    private 'network_id'?: string;
    private 'mac_address'?: string;
    private 'device_id'?: string;
    private 'device_owner'?: ListPortsRequestDeviceOwnerEnum | string;
    public status?: ListPortsRequestStatusEnum | string;
    private 'security_groups'?: Array<string>;
    public marker?: string;
    private 'fixed_ips'?: Array<string>;
    private 'enterprise_project_id'?: string;
    private 'enable_efi'?: boolean;
    public constructor() { 
    }
    public withName(name: string): ListPortsRequest {
        this['name'] = name;
        return this;
    }
    public withId(id: Array<string>): ListPortsRequest {
        this['id'] = id;
        return this;
    }
    public withLimit(limit: number): ListPortsRequest {
        this['limit'] = limit;
        return this;
    }
    public withAdminStateUp(adminStateUp: boolean): ListPortsRequest {
        this['admin_state_up'] = adminStateUp;
        return this;
    }
    public set adminStateUp(adminStateUp: boolean  | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp(): boolean | undefined {
        return this['admin_state_up'];
    }
    public withNetworkId(networkId: string): ListPortsRequest {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string  | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId(): string | undefined {
        return this['network_id'];
    }
    public withMacAddress(macAddress: string): ListPortsRequest {
        this['mac_address'] = macAddress;
        return this;
    }
    public set macAddress(macAddress: string  | undefined) {
        this['mac_address'] = macAddress;
    }
    public get macAddress(): string | undefined {
        return this['mac_address'];
    }
    public withDeviceId(deviceId: string): ListPortsRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string  | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId(): string | undefined {
        return this['device_id'];
    }
    public withDeviceOwner(deviceOwner: ListPortsRequestDeviceOwnerEnum | string): ListPortsRequest {
        this['device_owner'] = deviceOwner;
        return this;
    }
    public set deviceOwner(deviceOwner: ListPortsRequestDeviceOwnerEnum | string  | undefined) {
        this['device_owner'] = deviceOwner;
    }
    public get deviceOwner(): ListPortsRequestDeviceOwnerEnum | string | undefined {
        return this['device_owner'];
    }
    public withStatus(status: ListPortsRequestStatusEnum | string): ListPortsRequest {
        this['status'] = status;
        return this;
    }
    public withSecurityGroups(securityGroups: Array<string>): ListPortsRequest {
        this['security_groups'] = securityGroups;
        return this;
    }
    public set securityGroups(securityGroups: Array<string>  | undefined) {
        this['security_groups'] = securityGroups;
    }
    public get securityGroups(): Array<string> | undefined {
        return this['security_groups'];
    }
    public withMarker(marker: string): ListPortsRequest {
        this['marker'] = marker;
        return this;
    }
    public withFixedIps(fixedIps: Array<string>): ListPortsRequest {
        this['fixed_ips'] = fixedIps;
        return this;
    }
    public set fixedIps(fixedIps: Array<string>  | undefined) {
        this['fixed_ips'] = fixedIps;
    }
    public get fixedIps(): Array<string> | undefined {
        return this['fixed_ips'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPortsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string  | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId(): string | undefined {
        return this['enterprise_project_id'];
    }
    public withEnableEfi(enableEfi: boolean): ListPortsRequest {
        this['enable_efi'] = enableEfi;
        return this;
    }
    public set enableEfi(enableEfi: boolean  | undefined) {
        this['enable_efi'] = enableEfi;
    }
    public get enableEfi(): boolean | undefined {
        return this['enable_efi'];
    }
}

/**
    * @export
    * @enum {string}
    */
export enum ListPortsRequestDeviceOwnerEnum {
    NETWORKDHCP = 'network:dhcp',
    NEUTRONVIP_PORT = 'neutron:VIP_PORT',
    NETWORKROUTER_INTERFACE_DISTRIBUTED = 'network:router_interface_distributed',
    NETWORKROUTER_CENTRALIZED_SNAT = 'network:router_centralized_snat'
}
/**
    * @export
    * @enum {string}
    */
export enum ListPortsRequestStatusEnum {
    ACTIVE = 'ACTIVE',
    BUILD = 'BUILD',
    DOWN = 'DOWN'
}
