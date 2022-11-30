

export class ListPortsRequest {
    public name?: string;
    public id?: string;
    public limit?: number;
    private 'admin_state_up'?: boolean | undefined;
    private 'network_id'?: string | undefined;
    private 'mac_address'?: string | undefined;
    private 'device_id'?: string | undefined;
    private 'device_owner'?: ListPortsRequestDeviceOwnerEnum | undefined;
    public status?: ListPortsRequestStatusEnum;
    public marker?: string;
    private 'fixed_ips'?: string | undefined;
    private 'enterprise_project_id'?: string | undefined;
    public constructor() { 
    }
    public withName(name: string): ListPortsRequest {
        this['name'] = name;
        return this;
    }
    public withId(id: string): ListPortsRequest {
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
    public set adminStateUp(adminStateUp: boolean | undefined) {
        this['admin_state_up'] = adminStateUp;
    }
    public get adminStateUp() {
        return this['admin_state_up'];
    }
    public withNetworkId(networkId: string): ListPortsRequest {
        this['network_id'] = networkId;
        return this;
    }
    public set networkId(networkId: string | undefined) {
        this['network_id'] = networkId;
    }
    public get networkId() {
        return this['network_id'];
    }
    public withMacAddress(macAddress: string): ListPortsRequest {
        this['mac_address'] = macAddress;
        return this;
    }
    public set macAddress(macAddress: string | undefined) {
        this['mac_address'] = macAddress;
    }
    public get macAddress() {
        return this['mac_address'];
    }
    public withDeviceId(deviceId: string): ListPortsRequest {
        this['device_id'] = deviceId;
        return this;
    }
    public set deviceId(deviceId: string | undefined) {
        this['device_id'] = deviceId;
    }
    public get deviceId() {
        return this['device_id'];
    }
    public withDeviceOwner(deviceOwner: ListPortsRequestDeviceOwnerEnum): ListPortsRequest {
        this['device_owner'] = deviceOwner;
        return this;
    }
    public set deviceOwner(deviceOwner: ListPortsRequestDeviceOwnerEnum | undefined) {
        this['device_owner'] = deviceOwner;
    }
    public get deviceOwner() {
        return this['device_owner'];
    }
    public withStatus(status: ListPortsRequestStatusEnum): ListPortsRequest {
        this['status'] = status;
        return this;
    }
    public withMarker(marker: string): ListPortsRequest {
        this['marker'] = marker;
        return this;
    }
    public withFixedIps(fixedIps: string): ListPortsRequest {
        this['fixed_ips'] = fixedIps;
        return this;
    }
    public set fixedIps(fixedIps: string | undefined) {
        this['fixed_ips'] = fixedIps;
    }
    public get fixedIps() {
        return this['fixed_ips'];
    }
    public withEnterpriseProjectId(enterpriseProjectId: string): ListPortsRequest {
        this['enterprise_project_id'] = enterpriseProjectId;
        return this;
    }
    public set enterpriseProjectId(enterpriseProjectId: string | undefined) {
        this['enterprise_project_id'] = enterpriseProjectId;
    }
    public get enterpriseProjectId() {
        return this['enterprise_project_id'];
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
